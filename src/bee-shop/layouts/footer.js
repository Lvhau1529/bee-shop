import React from "react";
import { Row, Col } from "antd";
import FooterMenu from "../components/menu-footer";
import logo from "../assets/images/logo_footer_150x.png";
import "../styles/layouts/footer.css";

function Footer() {
	return (
		<>
			<footer>
				<div class="footer__block">
					<Row>
						<div class="footer__top-block">
							<Col>
								<div class="footer__top col-md-12">
									<div class="footer__content">
										<div class="footer__title">Join Newsletter Now</div>
										<div class="footer__sub-title">
											Stay updated on sales, new items and more
										</div>
										<div class="footer__mail">
											<input type="email" placeholder="Your Email Adress" />
											<button type="submit"></button>
										</div>
									</div>
								</div>
							</Col>
						</div>
					</Row>

					<div class="footer__mid">
						<div class="container">
							<Row class="footer__menu row">
								<FooterMenu
									title="Information"
									link_1="About Us"
									link_2="Careers"
									link_3="Delivery Information"
									link_4="Privacy Policy"
									link_5="Terms & Condition"
								/>

								<FooterMenu
									title="Information"
									link_1="About Us"
									link_2="Careers"
									link_3="Delivery Information"
									link_4="Privacy Policy"
									link_5="Terms & Condition"
								/>

								<FooterMenu
									title="Information"
									link_1="About Us"
									link_2="Careers"
									link_3="Delivery Information"
									link_4="Privacy Policy"
									link_5="Terms & Condition"
								/>

								<FooterMenu
									title="Information"
									link_1="About Us"
									link_2="Careers"
									link_3="Delivery Information"
									link_4="Privacy Policy"
									link_5="Terms & Condition"
								/>
							</Row>
						</div>
					</div>

					<div class="footer__bottom">
						<div class="footer__bottom-content">
							<div class="footer__logo">
								<img src={logo} alt="" />
							</div>
							<div class="footer__decs">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
									accumsan turpis rhoncus sapien gravida finibus.
								</p>
							</div>
							<div class="footer__icon">
								<div class="icon__nav"></div>
							</div>
							<div class="footer__copyright">
								Copyright @ 2019 Vinovathemes. All rights reserved
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

export default React.memo(Footer);
