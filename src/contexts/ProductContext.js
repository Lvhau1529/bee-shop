import React, { useState, useMemo } from "react"
import { getProducts, countProducts, addToCart, getCart, removeProductInCart } from "../services/firebaseService"

export const ProductContext = React.createContext()

export const ProductProvider = ({ children }) => {
    const limit = 4
    const [total, setTotal] = useState(0)
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1)
    const [cartProducts, setCartProducts] = useState([])

    const getCartProducts = async () => {
        try {
            const data = await getCart()
            setCartProducts(data)
        } catch (err) {
            alert(err.response?.data || err.message)
            console.error("Error get cart", err)
        }
    }

    const cartTotal = useMemo(() => {
        return (cartProducts || []).reduce((total, product) => {
            return total + product.price * product.count
        }, 0)
    }, [cartProducts])

    const [sort, setSort] = useState({
        sortBy: "price",
        sortOrder: "asc"
    })

    const offset = useMemo(() => {
        return (page - 1) * limit
    }, [page])

    const get = async () => {
        const data = await getProducts(offset, sort.sortBy, sort.sortOrder, limit)
        setProducts(data)
    }

    const count = async () => {
        const data = await countProducts()
        setTotal(data)
    }

    const add = (productId, number) => async () => {
        try {
            await addToCart(productId, number)
            await getCartProducts()
            alert("product is added to cart")
        } catch (err) {
            alert(err.response?.data || err.message)
            console.error(err)
        }
    }

    const changeCountNumber = productId => async (number) => {
        try {
            await addToCart(productId, number, true)
            await getCartProducts()
        } catch (err) {
            alert(err.response?.data || err.message)
            console.error(err)
        }
    }

    const removeCart = productId => async () => {
        try {
            await removeProductInCart(productId)
            await getCartProducts()
            alert("product is removed from cart")
        } catch (err) {
            alert(err.response?.data || err.message)
            console.error(err)
        }
    }

    const values = {
        limit,
        total,
        products,
        offset,
        page,
        sort,
        cartProducts,
        cartTotal,
        getCartProducts,
        setPage,
        get,
        count,
        add,
        setSort,
        removeCart,
        changeCountNumber
    }

    return <ProductContext.Provider value={values}>
        {children}
    </ProductContext.Provider>
}