import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Row, Col } from "antd";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import logo from "../../assets/images/logo_300x.jpg";
import img1 from "../../assets/images/4_2da966d0-5f84-4f25-b7ed-bcc6189053a4_155x.jpg";

function HeaderComponent() {
	const [isActive, setActive] = useState(false);

	const toggleClass = () => {
		setActive(!isActive);
	};
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
										<div className="cart__count-number">02</div>
									</div>
								</a>

								<div
									className={
										isActive ? "cart__quantity show" : "cart__quantity"
									}
								>
									{/* Item 1 */}
									<div className="cart__quantity-product">
										<div className="product__img">
											<Link to="/detail">
												<img src={img1} alt="" />
											</Link>
										</div>
										<div className="product__info">
											<div className="product__info-name">
												<Link to="/detail">Morbi viverra hend</Link>
											</div>
											<div className="product__info-size">50ml</div>
											<div className="product__info-price">$130 x 1</div>
											<div className="product__info-delete">
												<a href>
													<RiDeleteBinLine />
												</a>
											</div>
										</div>
									</div>

									{/* Item 2 */}
									<div className="cart__quantity-product">
										<div className="product__img">
											<Link to="/detail">
												<img src={img1} alt="" />
											</Link>
										</div>
										<div className="product__info">
											<div className="product__info-name">
												<Link to="/detail">Proin nulla dui</Link>
											</div>
											<div className="product__info-size">150ml</div>
											<div className="product__info-price">$200 x 1</div>
											<div className="product__info-delete">
												<a href>
													<RiDeleteBinLine />
												</a>
											</div>
										</div>
									</div>
									<div className="cart__quantity-payment">
										<div className="payment__total d-flex">
											<label htmlFor="">TOTAL:</label>
											<span>$330</span>
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
	);
}

export default React.memo(HeaderComponent);
