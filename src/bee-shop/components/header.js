import React from "react";
import logo from "../assets/images/logo_300x.jpg";
import "../styles/components/header.css";
import { Row, Col } from "antd";

function HeaderComponent() {
	return (
		<>
			<Row>
				<header className="header">
					<Col span={8}>
						<div className="logo">
							<img src={logo} alt="logo" />
						</div>
					</Col>
					<Col span={8}>
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
					<Col span={8}>
						<div className="search"></div>
					</Col>
				</header>
			</Row>

			
		</>
	);
}

export default React.memo(HeaderComponent);
