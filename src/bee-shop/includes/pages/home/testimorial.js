import React from "react";
import { Row, Col } from "antd";
import Slider from "react-slick";
// import "../styles/layouts/testimonial.css";
import img13 from "../../../assets/images/13_188x.webp";
import img14 from "../../../assets/images/14_188x.webp";
import img15 from "../../../assets/images/15_188x.webp";

function Testimorial() {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 4000,
	};
	return (
		<>
			<div class="testimonial__block">
				<div class="container">
					<div class="testimonial row">
						<Slider {...settings}>
							<Row>
								<Col span={24}>
									<div class="testimonial__img col-md-12">
										<img src={img13} alt="avt" />
									</div>
								</Col>
								<Col span={24}>
									<div class="testimonial__content col-md-12">
										<div class="testimonial__content--name">
											<strong>Simon Holmes</strong> - Doanh nhân
										</div>
										<div class="testimonial__content--decs">
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Curabitur eros libero, varius id sodales a, convallis id
												sem. Morbi ipsum sem, vestibulum a sollicitudin
												accumsan, pulvinar eget ligula.
											</p>
										</div>
									</div>
								</Col>
							</Row>

							<Row>
								<Col span={24}>
									<div class="testimonial__img col-md-12">
										<img src={img14} alt="avt" />
									</div>
								</Col>
								<Col span={24}>
									<div class="testimonial__content col-md-12">
										<div class="testimonial__content--name">
											<strong>Robin Parks</strong> - Nhân viên văn phòng
										</div>
										<div class="testimonial__content--decs">
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Curabitur eros libero, varius id sodales a, convallis id
												sem. Morbi ipsum sem, vestibulum a sollicitudin
												accumsan, pulvinar eget ligula.
											</p>
										</div>
									</div>
								</Col>
							</Row>

							<Row>
								<Col span={24}>
									<div class="testimonial__img col-md-12">
										<img src={img15} alt="avt" />
									</div>
								</Col>
								<Col span={24}>
									<div class="testimonial__content col-md-12">
										<div class="testimonial__content--name">
											<strong>Susan French</strong> - Nông dân
										</div>
										<div class="testimonial__content--decs">
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Curabitur eros libero, varius id sodales a, convallis id
												sem. Morbi ipsum sem, vestibulum a sollicitudin
												accumsan, pulvinar eget ligula.
											</p>
										</div>
									</div>
								</Col>
							</Row>
						</Slider>
					</div>
				</div>
			</div>
		</>
	);
}

export default React.memo(Testimorial);
