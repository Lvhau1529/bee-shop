import React from "react";
import { Row, Col } from "antd";
import Layout from "../../layouts/index";

export const ContactInfo = (props) => {
	return (
		<>
			<div className="contact__info">
				<div className="contact__info-icon">{props.icon}</div>
				<div className="contact__info-methods">{props.methods}</div>
				<div className="contact__info-detail">{props.detail}</div>
			</div>
		</>
	);
};

function Contact() {
	return (
		<>
			<Layout>
				<div className="contact">
					<div className="container">
						<Row>
							<Col span={24}>
								<div className="address__box">
									<div className="address__box-title">
										<p>Our store</p>
									</div>
									<div className="address__box-main">
										<p>380 Queen St W Toronto, ON M5V 2A5 Ca-na-đa</p>
									</div>
								</div>
							</Col>
						</Row>
            <Row>
            </Row>
              <Col span={8}>
                <ContactInfo />
              </Col>
              <Col span={8}>
                <ContactInfo />
              </Col>
              <Col span={8}>
                <ContactInfo />
              </Col>
					</div>
				</div>
			</Layout>
		</>
	);
}

export default React.memo(Contact);
