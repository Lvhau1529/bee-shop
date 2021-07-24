import React, { useState, useContext } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import { Row, Col } from "antd";
import { ProductContext } from "../../../contexts/ProductContext";
import useUserAuth from "../../../hooks/useUserAuth";
import firebase from "../../../configs/firebase";
import CartItem from "../components/CartItem";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import logo from "../../assets/images/logo_300x.jpg";

function HeaderComponent() {
	const productContext = useContext(ProductContext);
	const { cartProducts, getCartProducts, cartTotal, removeCart, sendEmail } =
		productContext;

	const history = useHistory();

	const checkout = async () => {
		try {
			await sendEmail();
			alert("Đặt hàng thành công. Chúng tôi sẽ liên hệ với bạn sớm.");
			history.push("/product");
		} catch (err) {
			console.error(err);
			alert(err.message);
		}
	};

	const signout = () => {
		firebase.auth().signOut();
	};

	const [isActive, setActive] = useState(false);

	const toggleClass = () => {
		setActive(!isActive);
	};

	useUserAuth(getCartProducts, null);

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
										<NavLink
											className="list__item-link"
											to="/"
											activeClassName="active"
										>
											Trang chủ
										</NavLink>
									</li>
									<li className="list__item">
										<NavLink className="list__item-link" to="/product">
											Cửa hàng
										</NavLink>
									</li>
									<li className="list__item">
										<NavLink className="list__item-link" to="#">
											Về chúng tôi
										</NavLink>
									</li>
									<li className="list__item">
										<NavLink className="list__item-link" to="#">
											Blog
										</NavLink>
									</li>
									<li className="list__item">
										<NavLink className="list__item-link" to="#">
											Liên hệ
										</NavLink>
									</li>
								</ul>
							</div>
						</nav>
					</Col>
					<Col span={6}>
						<ul className="nav__search d-flex justify-content-end align-items-center">
							{/* <li className="search">
								<IoSearchOutline />
								<div className="search__form"></div>
							</li> */}
							{/* Cart count */}
							<li className="nav__cart" onClick={toggleClass}>
								<a href>
									<IoCartOutline />
									<div className="cart__count">
										<div className="cart__count-number">
											{cartProducts.length}
										</div>
									</div>
								</a>

								<div
									className={
										isActive ? "cart__quantity show" : "cart__quantity"
									}
								>
									{cartProducts.map((product) => (
										<CartItem
											key={product.id}
											product={product}
											onDelete={removeCart(product.id)}
										/>
									))}
									<div className="cart__quantity-payment">
										<div className="payment__total d-flex">
											<label htmlFor="">Tổng:</label>
											<span>${cartTotal}</span>
										</div>
										<p>Phí giao hàng & thuế được tính khi thanh toán</p>
										<div className="payment__button d-flex justify-content-center">
											<div className="payment__button-viewcart">
												<Link to="/cart">Giỏ hàng</Link>
											</div>
											<div
												className="payment__button-checkout cursor-pointer"
												onClick={checkout}
											>
												<span>Đặt hàng</span>
											</div>
										</div>
									</div>
								</div>
							</li>
							{/* ./Cart count  */}
							<li className="account">
								<Link to="/dashboard/addProduct">
									<FaRegUser />
								</Link>
							</li>
							<li className="my-account cursor-pointer" onClick={signout}>
								<FiLogOut />
							</li>
						</ul>
					</Col>
				</Row>
			</header>
		</>
	);
}

export default React.memo(HeaderComponent);
