import React from "react";
import { Row, Col } from "antd";
import Title from "../components/center-title";
import "../styles/layouts/about.css"
import img from "../assets/images/5_850x.jpg";
import img2 from "../assets/images/5_90x.png";

function About() {
	return (
		<>
			<div class="about__block">
				<div class="container">
					{/* <!-- Title --> */}
					<Title title="Natural Honey" main="Why Choose Us" />
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
											<div class="box-content--title">100% Naturally</div>
											<div class="box-content--desc">
												<p>
													Lorem ipsum dolor sit amet, cons ectetur adipisicing
													elit, sed do.
												</p>
											</div>
										</div>
									</div>
									<div class="about__box-content">
										<div class="box-content__icon">
											<img src={img2} alt="" />
										</div>
										<div class="box-content__about">
											<div class="box-content--title">100% Naturally</div>
											<div class="box-content--desc">
												<p>
													Lorem ipsum dolor sit amet, cons ectetur adipisicing
													elit, sed do.
												</p>
											</div>
										</div>
									</div>
									<div class="about__box-content">
										<div class="box-content__icon">
											<img src={img2} alt="" />
										</div>
										<div class="box-content__about">
											<div class="box-content--title">100% Naturally</div>
											<div class="box-content--desc">
												<p>
													Lorem ipsum dolor sit amet, cons ectetur adipisicing
													elit, sed do.
												</p>
											</div>
										</div>
									</div>
									<div class="about__box-content last">
										<div class="box-content__icon">
											<img src={img2} alt="" />
										</div>
										<div class="box-content__about">
											<div class="box-content--title">
												Best Quality in the Market
											</div>
											<div class="box-content--desc">
												<p>
													Lorem ipsum dolor sit amet, cons ectetur adipisicing
													elit, sed do.
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
