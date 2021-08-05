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
										<img src={img14} alt="avt" />
									</div>
								</Col>
								<Col span={24}>
									<div class="testimonial__content col-md-12">
										<div class="testimonial__content--name">
											<strong>Nguyễn Huyền Trang</strong> - Doanh nhân
										</div>
										<div class="testimonial__content--decs">
											<p>
												Thay vì sử dụng mỹ phẩm chăm sóc da, mình lựa chọn mật
												ong làm mặt nạ và uống kết hợp với cà rốt và trứng để
												làm đẹp. Mình rất ưng chất lượng mật ong của BleBee
											</p>
										</div>
									</div>
								</Col>
							</Row>

							<Row>
								<Col span={24}>
									<div class="testimonial__img col-md-12">
										<img src={img13} alt="avt" />
									</div>
								</Col>
								<Col span={24}>
									<div class="testimonial__content col-md-12">
										<div class="testimonial__content--name">
											<strong>Vũ Tuấn</strong> - Nhân viên văn phòng
										</div>
										<div class="testimonial__content--decs">
											<p>
												Mình thường làm việc rất khuya, mình tin tưởng sử dụng
												sản phẩm của BleBee sau những giờ làm việc vất vả để có
												1 giấc ngủ ngon
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
											<strong>Nguyễn Toàn</strong> - Nông dân
										</div>
										<div class="testimonial__content--decs">
											<p>
                      Đợt tôi bị viêm họng mãi không khỏi nên muốn dùng mật ong tốt tôi nhớ ngay đến BleBee. Tôi mua mật ong về uống thấy khá ok. Chất lượng và giá cả hợp lý đáng tin cậy
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
