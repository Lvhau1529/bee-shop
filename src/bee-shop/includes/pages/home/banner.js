import React from "react";
import Slider from "react-slick";
import Button from "../../components/button";
import img from "../../../assets/images/1_2048x.webp";
import img2 from "../../../assets/images/2_2048x.webp";
// import "../styles/components/banner.css";

function Banner() {
	const settings = {
		dots: true,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		speed: 500,
		autoplaySpeed: 2000,
	};
	return (
		<>
			<div>
				<Slider {...settings}>
					<div class="banner__content">
						<div class="banner__bg">
							<img alt="banner" src={img} />
							<div class="content animate__animated">
								<div class="content__title animate__animated animate__fadeInRight">
									<p>Sữa chua mật ong</p>
								</div>
								<div class="content__sub animate__animated animate__fadeInUp">
									<p>Sản phẩm hot</p>
								</div>
								<div class="content__desc  animate__fadeInUp">
									<p>
										Một sự kết hợp tuyệt vời giữa mật ong tự nhiên cùng với những loại sữa chua truyền thống nổi tiếng có chất lượng tốt nhất của Hy Lạp.
									</p>
								</div>
								<Button
									className="animate__animated animate__slideInDown"
									title="Mua ngay"
									link="/product"
								/>
							</div>
						</div>
					</div>

					<div class="banner__content">
						<div class="banner__bg--2">
							<img alt="banner" src={img2} />
							<div class="content--2">
								<div class="content__title animate__animated animate__bounceInDown">
									<p>Mật ong hữu cơ</p>
								</div>
								<div class="content__sub animate__animated animate__flipInX">
									<p>Sản phẩm sắp ra mắt</p>
								</div>
								<div class="content__desc animate__animated animate__fadeInDown">
									<p>
										Dòng sản phẩm sắp ra mắt hy vọng sẽ tạo nên một xu hướng tiêu dùng mới.
									</p>
								</div>
								<Button
									className="animate__animated animate__lightSpeedInRight"
									title="Mua ngay"
									link="/product"
								/>
							</div>
						</div>
					</div>
				</Slider>
			</div>
		</>
	);
}

export default React.memo(Banner);
