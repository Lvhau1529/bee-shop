import React from "react";
import logo from "../../assets/images/logo_300x.jpg";
import { Row, Col } from "antd";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";

function HeaderComponent() {
	return (
		<>
			<header className="header">
				<Row className="d-flex justify-content-center align-items-center">
					<Col span={6}>
						<div className="logo">
							<img src={logo} alt="logo" />
						</div>
					</Col>
					<Col span={10}>
						<nav className="nav">
							<div className="nav__menu">
								<ul className="nav__menu-list d-flex justify-content-center">
									<li className="list__item">
										<a href className="list__item-link">
											Home
										</a>
										{/* <ul className="list__item-dropdown">
											<li className="dropdown__item">
												<a href className="dropdown__item-link">
													Home Shop 1
												</a>
											</li>
											<li className="dropdown__item">
												<a href className="dropdown__item-link">
													Home Shop 2
												</a>
											</li>
											<li className="dropdown__item">
												<a href className="dropdown__item-link">
													Home Shop 3
												</a>
											</li>
										</ul> */}
									</li>
									<li className="list__item">
										<a href className="list__item-link">
											Shop
										</a>
									</li>
									<li className="list__item">
										<a href className="list__item-link">
											Page
										</a>
									</li>
									<li className="list__item">
										<a href className="list__item-link">
											Blog
										</a>
									</li>
									<li className="list__item">
										<a href className="list__item-link">
											Contact
										</a>
									</li>
								</ul>
							</div>
						</nav>
					</Col>
					<Col span={6}>
						<div className="nav__search d-flex justify-content-end">
							<div className="search">
								<FaSearch />
								<div className="search__form"></div>
							</div>
							<div className="cart">
								<FaShoppingCart />
							</div>
							<div className="account">
								<FaUser />
							</div>
							<div className="my-account">
								<AiFillSetting />
							</div>
						</div>
					</Col>
				</Row>
			</header>
		</>
	);
}

export default React.memo(HeaderComponent);
