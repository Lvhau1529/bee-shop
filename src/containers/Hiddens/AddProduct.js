import React, { useState } from "react"
import { addProduct } from "../../services/firebaseService"

const products = [
    {
        name: "Test product",
        price: 140,
        sale: 12,
        img: "https://firebasestorage.googleapis.com/v0/b/bee-shop-4ee5b.appspot.com/o/4_507f6fba-f388-4083-9fb4-e2da9dfda4ee_425x.webp?alt=media&token=44a0e684-181e-41e7-b90e-d4fa8d115b75",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque New producteu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."
    },
    {
        name: "ABC Test product",
        price: 134,
        sale: 8,
        img: "https://firebasestorage.googleapis.com/v0/b/bee-shop-4ee5b.appspot.com/o/4_507f6fba-f388-4083-9fb4-e2da9dfda4ee_425x.webp?alt=media&token=44a0e684-181e-41e7-b90e-d4fa8d115b75",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque New producteu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."
    },
    {
        name: "XYZ Test product",
        price: 25,
        sale: 5,
        img: "https://firebasestorage.googleapis.com/v0/b/bee-shop-4ee5b.appspot.com/o/4_507f6fba-f388-4083-9fb4-e2da9dfda4ee_425x.webp?alt=media&token=44a0e684-181e-41e7-b90e-d4fa8d115b75",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque New producteu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."
    },
    {
        name: "ZZZ product",
        price: 123,
        sale: 12,
        img: "https://firebasestorage.googleapis.com/v0/b/bee-shop-4ee5b.appspot.com/o/4_507f6fba-f388-4083-9fb4-e2da9dfda4ee_425x.webp?alt=media&token=44a0e684-181e-41e7-b90e-d4fa8d115b75",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque New producteu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."
    },
    {
        name: "Test product 46",
        price: 65,
        sale: 2,
        img: "https://firebasestorage.googleapis.com/v0/b/bee-shop-4ee5b.appspot.com/o/4_507f6fba-f388-4083-9fb4-e2da9dfda4ee_425x.webp?alt=media&token=44a0e684-181e-41e7-b90e-d4fa8d115b75",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque New producteu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."
    },
    {
        name: "4404 product",
        price: 88,
        sale: 19,
        img: "https://firebasestorage.googleapis.com/v0/b/bee-shop-4ee5b.appspot.com/o/4_507f6fba-f388-4083-9fb4-e2da9dfda4ee_425x.webp?alt=media&token=44a0e684-181e-41e7-b90e-d4fa8d115b75",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque New producteu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."
    },
    {
        name: "Test product 555",
        price: 17,
        sale: 0,
        img: "https://firebasestorage.googleapis.com/v0/b/bee-shop-4ee5b.appspot.com/o/4_507f6fba-f388-4083-9fb4-e2da9dfda4ee_425x.webp?alt=media&token=44a0e684-181e-41e7-b90e-d4fa8d115b75",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque New producteu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."
    },
    {
        name: "Best product",
        price: 15,
        sale: 2,
        img: "https://firebasestorage.googleapis.com/v0/b/bee-shop-4ee5b.appspot.com/o/4_507f6fba-f388-4083-9fb4-e2da9dfda4ee_425x.webp?alt=media&token=44a0e684-181e-41e7-b90e-d4fa8d115b75",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque New producteu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."
    },
    {
        name: "Test 1111 product",
        price: 100,
        sale: 11,
        img: "https://firebasestorage.googleapis.com/v0/b/bee-shop-4ee5b.appspot.com/o/4_507f6fba-f388-4083-9fb4-e2da9dfda4ee_425x.webp?alt=media&token=44a0e684-181e-41e7-b90e-d4fa8d115b75",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque New producteu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."
    },
    {
        name: "Test xxx product",
        price: 189,
        sale: 24,
        img: "https://firebasestorage.googleapis.com/v0/b/bee-shop-4ee5b.appspot.com/o/4_507f6fba-f388-4083-9fb4-e2da9dfda4ee_425x.webp?alt=media&token=44a0e684-181e-41e7-b90e-d4fa8d115b75",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque New producteu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."
    }
]

const initData = {
    name: "",
    price: 0,
    sale: 0,
    img: "",
    description: ""
}

const AddProduct = () => {
    const [data, setData] = useState({ ...initData })

    const changeData = valueObj => {
        setData({
            ...data,
            ...valueObj
        })
    }

    const add = async (product) => {
        try {
            const { name, price, img, description } = product
            if ([name, price, img, description].some(value => !value)) throw new Error("Invalid data")
            await addProduct(product)
            alert("Add product successfully")
        } catch (err) {
            console.error(err.response?.data || err.message)
        }
    }

    const addSampleProducts = async () => {
        for (const product of products) {
            await add(product)
        }
        alert("Added sample products")
    }

    return <div style={{
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around"
    }}>
        <h5>Add products</h5>
        <input
            value={data.name}
            onChange={e => changeData({ name: e.target.value })}
            placeholder="Name"
        />
        <input
            type="number"
            min={0}
            value={data.price}
            onChange={e => changeData({ price: parseInt(e.target.value) })}
            placeholder="Price"
        />
        <input
            type="number"
            value={data.sale}
            onChange={e => changeData({ sale: parseInt(e.target.value) })}
            placeholder="Sale"
        />
        <input
            value={data.img}
            onChange={e => changeData({ img: e.target.value })}
            placeholder="Image url"
        />
        <input
            value={data.description}
            onChange={e => changeData({ description: e.target.value })}
            placeholder="Description"
        />
        <div>
            <button onClick={() => add(data)}>Add</button>{" "}
            <button onClick={addSampleProducts}>Add sample</button>
        </div>
    </div>
}

export default AddProduct