import React from "react";
import { Row, Col } from "antd";
import Button from "../../components/button";
// import "../styles/layouts/story.css";
import img from "../../../assets/images/4_850x.webp";

function Story() {
	return (
		<>
			<div class="story__block">
				<div class="container">
					<div class="story row">
						<Row>
							<Col span={12}>
								<div class="story__left col-md-6">
									<div class="story__content">
										<div class="story__content--title">Our Story</div>
										<div class="story__content--sub-title">
											“ Natural honey is a very good food for health. ”
										</div>
										<div class="story__content--desc">
											Interdum et malesuada fames ac ante ipsum primis in
											faucibus. Vestibulum laoreet est orci, eu placerat est
											posuere in. Sed malesuada magna vitae pulvinar varius.
											Orci varius nato que penatibus et magnis dis parturient
											montes, nascetur ridiculus mus. Integer vel nisi lorem.
											Donec dignissim non est ut pulvinar. Duis lobortis metus
											in libero commodo rhon cus. Nullam a nunc libero. Donec
											non arcu arcu.
										</div>
										<Button title="Read More" />
									</div>
								</div>
							</Col>

							<Col span={12}>
								<div class="story__right col-md-6">
									<div class="story__img">
										<img src={img} alt="" />
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

export default React.memo(Story);
