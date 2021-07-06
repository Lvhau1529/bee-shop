import React from "react"
import { Link } from "react-router-dom"
import { RiDeleteBinLine } from "react-icons/ri"

const CartItem = ({ product, onDelete }) => {
    const { count, name, price, img } = product

    return <div className="cart__quantity-product">
        <div className="product__img">
            <Link to="/detail">
                <img src={img} alt="" />
            </Link>
        </div>
        <div className="product__info">
            <div className="product__info-name">
                <Link to="/detail">{name}</Link>
            </div>
            {/* <div className="product__info-size">50ml</div> */}
            <div className="product__info-price">${price} x {count}</div>
            <div className="product__info-delete" onClick={onDelete}>
                <RiDeleteBinLine />
            </div>
        </div>
    </div>
}

export default CartItem