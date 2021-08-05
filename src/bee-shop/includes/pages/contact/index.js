import React from "react";
import { Row, Col } from "antd";
import Layout from "../../layouts/index";
import Breadcrumb from "../../components/breadcrumb";
import { FcAssistant } from "react-icons/fc";

export const ContactInfo = (props) => {
	return (
		<>
			<div className="contact__info d-flex justify-content-center">
				<div className="contact__info-icon">{props.icon}</div>
				<div className="contact__info-methods">{props.method}</div>
				<div className="contact__info-detail">{props.detail}</div>
			</div>
		</>
	);
};

function Contact() {
	return (
		<>
			<Layout>
				<Breadcrumb
					style={{ marginBottom: "8rem" }}
					title="Liên hệ"
					link1="/"
					link2="/contact"
					name1="Trang chủ"
					name2="Liên hệ"
				/>
				<div className="contact">
					<div className="container">
						<Row>
							<Col span={24} offset={7}>
								<div class="contact-main">
									<div className="contact-icon">
										<FcAssistant style={{ fontSize: "9rem" }} />
									</div>

									<form action="#" class="contact-form" autocomplete="off">
										<div class="contact-form-group">
											<label for="name" class="contact-form-label">
												Tên
											</label>
											<input id="name" type="text" class="contact-form-input" />
										</div>
										<div class="contact-form-group">
											<label for="email" class="contact-form-label">
												Email
											</label>
											<input
												id="email"
												type="email"
												class="contact-form-input"
											/>
										</div>
										<div class="contact-form-group">
											<label for="message" class="contact-form-label">
												Tin nhắn
											</label>
											<textarea
												name="message"
												id="message"
												class="contact-form-area"
												placeholder="Gửi tin nhắn cho chúng tôi"
												value=""
											></textarea>
										</div>
										<button type="submit" class="contact-form-submit">
											Gửi tin nhắn
										</button>
									</form>
								</div>
							</Col>
						</Row>
						{/* <Row>
							<Col span={24}>
								<div className="address__box">
									<div className="address__box-title">
										<p>Địa chỉ</p>
									</div>
									<div className="address__box-main">
										<p>
											Học viện Nông Nghiệp Việt Nam, Trâu Quỳ, Gia Lâm, Hà Nội
										</p>
									</div>
								</div>
							</Col>
						</Row> */}
					</div>
				</div>
			</Layout>
		</>
	);
}

export default React.memo(Contact);
