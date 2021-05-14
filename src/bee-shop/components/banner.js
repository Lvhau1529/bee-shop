import React from "react";
import Slider from "react-slick";
import Button from "../components/button";
import img from "../assets/images/1_2048x.webp";
import img2 from "../assets/images/2_2048x.webp";
import "../styles/components/banner.css";

function Banner() {
	const settings = {
		dots: true,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 2,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 1000,
	};
	return (
		<>
			<div>
				<Slider {...settings}>
					<div class="banner__content">
						<div class="banner__bg">
							<img alt="banner" src={img} />
							<div class="content">
								<div class="content__title">
									<p>Honey Yoghurt</p>
								</div>
								<div class="content__sub">
									<p>Hot trending</p>
								</div>
								<div class="content__desc">
									<p>
										Maecenas varius urna et diam ultrices luctus. Sed lobortis,
										nulla viverra hendrerit auctor, ipsum est feugiat nisi, eget
										bibendum arcu orci ac risus. Ut egestas vitae lectus eu
										pretium.
									</p>
								</div>
								<Button title="Buy Now" />
							</div>
						</div>
					</div>

					<div class="banner__content">
						<div class="banner__bg--2">
							<img alt="banner" src={img2} />
							<div class="content--2">
								<div class="content__title">
									<p>Honey Yoghurt</p>
								</div>
								<div class="content__sub">
									<p>Hot trending</p>
								</div>
								<div class="content__desc">
									<p>
										Maecenas varius urna et diam ultrices luctus. Sed lobortis,
										nulla viverra hendrerit auctor, ipsum est feugiat nisi, eget
										bibendum arcu orci ac risus. Ut egestas vitae lectus eu
										pretium.
									</p>
								</div>
								<Button title="Buy Now" />
							</div>
						</div>
					</div>
				</Slider>
			</div>
		</>
	);
}

export default React.memo(Banner);
