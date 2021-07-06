import React, { useEffect, useState, useContext } from "react"
import { NavLink, Link } from "react-router-dom"
import { Row, Col } from "antd"
import { IoSearchOutline } from "react-icons/io5"
import { IoCartOutline } from "react-icons/io5"
import { FaUser } from "react-icons/fa"
import { AiFillSetting } from "react-icons/ai"
import logo from "../../assets/images/logo_300x.jpg"
import CartItem from "../components/CartItem"
import { ProductContext } from "../../../contexts/ProductContext"
import useUserAuth from "../../../hooks/useUserAuth"
function HeaderComponent() {
	const productContext = useContext(ProductContext)
	const {
		cartProducts,
		getCartProducts,
		cartTotal,
		removeCart
	} = productContext

	const [isActive, setActive] = useState(false)

	const toggleClass = () => {
		setActive(!isActive)
	}

	useUserAuth(getCartProducts, null)

	return (
		<>
			<header className="header">
				<Row className="d-flex justify-content-center align-items-center">
					<Col span={6}>
						<div className="logo">
							<NavLink to="/">
								<img src={logo} alt="logo" />
							</NavLink>
						</div>
					</Col>
					<Col span={10}>
						<nav className="nav">
							<div className="nav__menu">
								<ul className="nav__menu-list d-flex justify-content-center">
									<li className="list__item">
										<NavLink className="list__item-link" to="/" activeClassName="active">
											Home
										</NavLink>
									</li>
									<li className="list__item">
										<NavLink className="list__item-link" to="/product">
											Shop
										</NavLink>
									</li>
									<li className="list__item">
										<NavLink className="list__item-link" to="#">
											Page
										</NavLink>
									</li>
									<li className="list__item">
										<NavLink className="list__item-link" to="#">
											Blog
										</NavLink>
									</li>
									<li className="list__item">
										<NavLink className="list__item-link" to="#">
											Contact
										</NavLink>
									</li>
								</ul>
							</div>
						</nav>
					</Col>
					<Col span={6}>
						<ul className="nav__search d-flex justify-content-end align-items-center">
							<li className="search">
								<IoSearchOutline />
								<div className="search__form"></div>
							</li>
							{/* Cart count */}
							<li className="nav__cart" onClick={toggleClass}>
								<a href>
									<IoCartOutline />
									<div className="cart__count">
										<div className="cart__count-number">{cartProducts.length}</div>
									</div>
								</a>

								<div
									className={
										isActive ? "cart__quantity show" : "cart__quantity"
									}
								>
									{cartProducts.map(product => <CartItem
										key={product.id}
										product={product}
										onDelete={removeCart(product.id)}
									/>)}
									<div className="cart__quantity-payment">
										<div className="payment__total d-flex">
											<label htmlFor="">TOTAL:</label>
											<span>${cartTotal}</span>
										</div>
										<p>Shipping & taxes calculated at checkout</p>
										<div className="payment__button d-flex justify-content-center">
											<div className="payment__button-viewcart">
												<Link to="/cart">View Cart</Link>
											</div>
											<div className="payment__button-checkout">
												<a href>Check out</a>
											</div>
										</div>
									</div>
								</div>
							</li>
							{/* ./Cart count  */}
							<li className="account">
								<FaUser />
							</li>
							<li className="my-account">
								<AiFillSetting />
							</li>
						</ul>
					</Col>
				</Row>
			</header>
		</>
	)
}

export default React.memo(HeaderComponent)
