import React from "react";
import { Row, Col, BackTop } from "antd";
import FooterMenu from "../components/home/menu-footer";
import logo from "../../assets/images/logo_footer_150x.png";
import { BiArrowToTop } from "react-icons/bi";

const style = {
	height: 40,
	width: 40,
	lineHeight: "45px",
	border: "1px solid #FDC826",
	borderRadius: "50%",
	backgroundColor: "white",
	color: "black",
	textAlign: "center",
	fontSize: 20,
};

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
										<div class="footer__title">Tham gia cùng chúng tôi</div>
										<div class="footer__sub-title">
											Nhận thông tin về sản phẩm mới, khuyến mãi
										</div>
										<div class="footer__mail">
											{/* <input type="email" placeholder="Your Email Adress" />
											<button type="submit"></button> */}
											<div className="subscribe-form">
												<input
													type="email"
													class="subscribe-form-input"
													placeholder="Nhập địa chỉ email"
												/>
												<button class="subscribe-form-button">Đăng ký</button>
											</div>
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
									title="Thông tin"
									link_1="Về chúng tôi"
									link_2="Tuyển dụng"
									link_3="Thông tin vận chuyển"
									link_4="Chính sách bảo mật"
									link_5="Điều khoản & điều kiện"
								/>
								<FooterMenu
									title="Tài khoản"
									link_1="Đặt hàng"

								/>
								<FooterMenu
									title="Dịch vụ khách hàng"
									link_1="Giỏ hàng"
								/>
								<FooterMenu
									title="Liên hệ"
									link_1="Địa chỉ: Học viện Nông Nghiệp Việt Nam"
									link_2="Email: lvhau1529@gmail.com"
								/>
							</Row>
						</div>
					</div>

					<div class="footer__bottom">
						<div class="footer__bottom-content">
							<div class="footer__logo">
								<img src={logo} alt="" />
							</div>
							{/* <div class="footer__decs">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
									accumsan turpis rhoncus sapien gravida finibus.
								</p>
							</div> */}
							<div class="footer__icon">
								<div class="icon__nav"></div>
							</div>
							<div class="footer__copyright">
								Copyright @ 2019 Vinovathemes. All rights reserved
							</div>
						</div>
					</div>
				</div>
				<BackTop style={{ right: "1rem" }}>
					<div style={style}>
						<BiArrowToTop />
					</div>
				</BackTop>
			</footer>
		</>
	);
}

export default React.memo(Footer);
