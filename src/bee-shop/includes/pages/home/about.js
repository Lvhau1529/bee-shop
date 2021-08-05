import React from "react";
import { Row, Col } from "antd";
import Title from "../../components/home/center-title";
// import "assets/styles/pages/home/about.css"
import img from "../../../assets/images/5_850x.jpg";
import img2 from "../../../assets/images/5_90x.png";
import img3 from "../../../assets/images/6_90x.webp";
import img4 from "../../../assets/images/7_90x.webp";
import img5 from "../../../assets/images/8_90x.png";

function About() {
	return (
		<>
			<div class="about__block">
				<div class="container">
					{/* <!-- Title --> */}
					<Title title="Mật ong tự nhiên" main="Tại sao chọn chúng tôi" />
					{/* <!-- ./Title --> */}
					{/* <!-- About-content --> */}
					<div class="about__bottom row">
						<Row>
							<Col span={16}>
								<div class="about__img col-md-8">
									<img src={img} alt="about" />
								</div>
							</Col>
							<Col span={8}>
								<div class="about__content col-md-4">
									<div class="about__box-content">
										<div class="box-content__icon">
											<img src={img2} alt="" />
										</div>
										<div class="box-content__about">
											<div class="box-content--title">100% tự nhiên</div>
											<div class="box-content--desc">
												<p>
													Không sử dụng bất cứ phụ da thực phẩm nào cho sản phẩm.
												</p>
											</div>
										</div>
									</div>
									<div class="about__box-content">
										<div class="box-content__icon">
											<img src={img3} alt="" />
										</div>
										<div class="box-content__about">
											<div class="box-content--title">Bán hàng trực tuyến 24/7</div>
											<div class="box-content--desc">
												<p>
													Đặt hàng và chúng tôi sẽ liên hệ với bạn ngay.
												</p>
											</div>
										</div>
									</div>
									<div class="about__box-content">
										<div class="box-content__icon">
											<img src={img4} alt="" />
										</div>
										<div class="box-content__about">
											<div class="box-content--title">Giao hàng tận nhà</div>
											<div class="box-content--desc">
												<p>
													Dịch vụ giao hàng nhanh chóng. Thanh toán khi nhận hàng.
												</p>
											</div>
										</div>
									</div>
									<div class="about__box-content last">
										<div class="box-content__icon">
											<img src={img5} alt="" />
										</div>
										<div class="box-content__about">
											<div class="box-content--title">
												Chất lượng sản phẩm tốt nhất
											</div>
											<div class="box-content--desc">
												<p>
													Cam kết sản phẩm có giấy chứng nhận, kiểm nghiệm.
												</p>
											</div>
										</div>
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

export default React.memo(About);
