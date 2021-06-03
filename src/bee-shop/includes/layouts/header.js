import React from "react";
import logo from "../../assets/images/logo_300x.jpg";
// import "../../assets/styles/layouts/header.js";
import { Row, Col } from "antd";

function HeaderComponent() {
	return (
		<>
			<header className="header">
				<Row>
					<Col span={6}>
						<div className="logo">
							<img src={logo} alt="logo" />
						</div>
					</Col>
					<Col span={10}>
						<nav className="nav">
							<ul className="nav__list">
								<li className="nav__item">
									<a className="nav__link" href>
										Home
									</a>
								</li>
								<li className="nav__item">
									<a className="nav__link" href>
										Shop
									</a>
								</li>
								<li className="nav__item">
									<a className="nav__link" href>
										Pages
									</a>
								</li>
								<li className="nav__item">
									<a className="nav__link" href>
										Blog
									</a>
								</li>
								<li className="nav__item">
									<a className="nav__link" href>
										Contact
									</a>
								</li>
							</ul>
						</nav>
					</Col>
					<Col span={6}>
						<div className="nav__search">
							<div className="search">
								<i className="search__icon"></i>
								<div className="search__form"></div>
							</div>
							<div className="cart"></div>
							<div className="account"></div>
							<div className="my-account"></div>
						</div>
					</Col>
				</Row>
			</header>
		</>
	);
}

export default React.memo(HeaderComponent);
