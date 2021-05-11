import React from "react";
import { Row, Col } from "antd";
import Title from "../components/center-title";
import img from "../assets/images/1_570x.png"
import "../styles/layouts/blog.css";

function Blog() {
	return (
		<>
			<div class="blog__block">
				<div class="container">
					{/* <!-- Title --> */}
					<Title title="Newest" main="From Our Blog"/>
					{/* <!-- ./Title --> */}
					<div class="blog row">
						<Row>
							<Col>
								<div class="block__content col-md-6">
									<div class="block__image">
										<img src={img} alt="" />
									</div>
									<div class="blog__icon">
										<div class="blog__icon--info">
											<div class="article__date">
												<i class="icon-calendar"></i>
												<span>09/05/2021</span>
											</div>
											<div class="article__author">
												<i class="icon-account"></i>
												<span>Le Van Hau</span>
											</div>
										</div>
										<div class="blog__icon--more">
											<a href>Read More</a>
										</div>
									</div>
									<div class="blog__title">
										<a href>Although we worry, honey bees are built to last</a>
									</div>
								</div>
							</Col>

              <Col>
								<div class="block__content col-md-6">
									<div class="block__image">
										<img src={img} alt="" />
									</div>
									<div class="blog__icon">
										<div class="blog__icon--info">
											<div class="article__date">
												<i class="icon-calendar"></i>
												<span>09/05/2021</span>
											</div>
											<div class="article__author">
												<i class="icon-account"></i>
												<span>Le Van Hau</span>
											</div>
										</div>
										<div class="blog__icon--more">
											<a href>Read More</a>
										</div>
									</div>
									<div class="blog__title">
										<a href>Although we worry, honey bees are built to last</a>
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

export default React.memo(Blog);
