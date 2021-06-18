import React from "react";
import { Row, Col } from "antd";
import TitleBlock from "../../components/home/center-title";
import ProductItem from "../../components/product";
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
								<ProductItem
									img={img}
									name="Proin nulla dui"
									price="$140.000"
									sale="$280.000"
								/>
							</Col>

							<Col span={6}>
							<ProductItem
									img={img}
									name="Proin nulla dui"
									price="$140.000"
								/>
							</Col>

							<Col span={6}>
							<ProductItem
									img={img}
									name="Proin nulla dui"
									price="$140.000"
									sale="$280.000"
								/>
							</Col>

							<Col span={6}>
							<ProductItem
									img={img}
									name="Proin nulla dui"
									price="$140.000"
									sale="$280.000"
								/>
							</Col>
						</Row>
					</div>
				</div>
			</div>
		</>
	);
}

export default React.memo(Product);
