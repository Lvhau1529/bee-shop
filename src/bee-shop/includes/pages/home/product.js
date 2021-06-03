import React from "react";
import { Row, Col } from "antd";
import TitleBlock from "../../components/home/center-title";
// import "../styles/layouts/product.css";
import img from "../../../assets/images/4_507f6fba-f388-4083-9fb4-e2da9dfda4ee_425x.webp";

function Product() {
	return (
		<>
			<div class="product__block">
				<div class="product container">
					{/* <!-- Title --> */}
					<TitleBlock title="Our Store" main="Featured Products" />
					{/* <!-- ./Title --> */}

					{/* Product detail */}
					<div className="product__detail">
						<Row>
							<Col span={6}>
								<div class="product__item col-md-3">
									<div class="product__img img-fluid">
										<a href>
											<img src={img} alt="" />
										</a>
									</div>
									<div class="product__info">
										<div class="product__name">Proin nulla dui</div>
										<div class="product__price">
											<div class="product__price--regular">
												<span>$140.000</span>
											</div>
											<div class="product__price--sale">
												<span>$280.000</span>
											</div>
										</div>
									</div>
								</div>
							</Col>
              
							<Col span={6}>
								<div class="product__item col-md-3">
									<div class="product__img img-fluid">
										<a href>
											<img src={img} alt="" />
										</a>
									</div>
									<div class="product__info">
										<div class="product__name">Proin nulla dui</div>
										<div class="product__price">
											<div class="product__price--regular">
												<span>$140.000</span>
											</div>
											<div class="product__price--sale">
												<span>$280.000</span>
											</div>
										</div>
									</div>
								</div>
							</Col>

							<Col span={6}>
								<div class="product__item col-md-3">
									<div class="product__img img-fluid">
										<a href>
											<img src={img} alt="" />
										</a>
									</div>
									<div class="product__info">
										<div class="product__name">Proin nulla dui</div>
										<div class="product__price">
											<div class="product__price--regular">
												<span>$140.000</span>
											</div>
											<div class="product__price--sale">
												<span>$280.000</span>
											</div>
										</div>
									</div>
								</div>
							</Col>

              <Col span={6}>
                <div class="product__item col-md-3">
									<div class="product__img img-fluid">
										<a href>
											<img src={img} alt="" />
										</a>
									</div>
									<div class="product__info">
										<div class="product__name">Proin nulla dui</div>
										<div class="product__price">
											<div class="product__price--regular">
												<span>$140.000</span>
											</div>
											<div class="product__price--sale">
												<span>$280.000</span>
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

export default React.memo(Product);
