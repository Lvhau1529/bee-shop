import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import Title from "../../components/home/center-title";
import img from "../../../assets/images/1_570x.png";
import img1 from "../../../assets/images/2_570x.png";

function Blog() {
	return (
		<>
			<div class="blog__block">
				<div class="container">
					{/* <!-- Title --> */}
					<Title title="Tin tức" main="Blog của chúng tôi" />
					{/* <!-- ./Title --> */}
					<div class="blog row">
						<Row>
							<Col span={12}>
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
												<span>Admin</span>
											</div>
										</div>
										<div class="blog__icon--more">
											<Link to="/news/detail">Đọc thêm</Link>
										</div>
									</div>
									<div class="blog__title">
										<Link to="/news/detail">
											Những điều có thể bạn chưa biết về mật ong
										</Link>
									</div>
								</div>
							</Col>

							<Col span={12}>
								<div class="block__content col-md-6">
									<div class="block__image">
										<img src={img1} alt="" />
									</div>
									<div class="blog__icon">
										<div class="blog__icon--info">
											<div class="article__date">
												<i class="icon-calendar"></i>
												<span>09/05/2021</span>
											</div>
											<div class="article__author">
												<i class="icon-account"></i>
												<span>Admin</span>
											</div>
										</div>
										<div class="blog__icon--more">
											<Link to="/news/detail">Đọc thêm</Link>
										</div>
									</div>
									<div class="blog__title">
										<Link to="/news/detail">
											Công dụng tuyệt vời của sữa ong chúa
										</Link>
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
