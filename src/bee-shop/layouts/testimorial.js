import React from "react";
import { Row, Col } from "antd";
import "../styles/layouts/testimonial.css";
import img from "../assets/images/13_188x.webp";

function Testimorial() {
	return (
		<>
			<div class="testimonial__block">
				<div class="container">
					<div class="testimonial row">
						<Row>
							<Col span={24}>
								<div class="testimonial__img col-md-12">
									<img src={img} alt="avt" />
								</div>
							</Col>
							<Col span={24}>
								<div class="testimonial__content col-md-12">
									<div class="testimonial__content--name">
										<strong>Simon Holmes</strong> - Businessman
									</div>
									<div class="testimonial__content--decs">
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Curabitur eros libero, varius id sodales a, convallis id
											sem. Morbi ipsum sem, vestibulum a sollicitudin accumsan,
											pulvinar eget ligula.
										</p>
									</div>
								</div>
							</Col>
						</Row>
					</div>
				</div>
			</div>
		</>
	);
}

export default React.memo(Testimorial);
