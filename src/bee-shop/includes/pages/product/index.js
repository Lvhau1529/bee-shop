import React from "react";
import Layout from "../../layouts/index";
import Breadcrumb from "../../components/breadcrumb";
import ProductItem from "../../components/product";
import { Row, Col, Select, Pagination } from "antd";
import { FaThList } from "react-icons/fa";
import { FaThLarge } from "react-icons/fa";
import img from "../../../assets/images/4_507f6fba-f388-4083-9fb4-e2da9dfda4ee_425x.webp";

const { Option } = Select;

function handleChange(value) {
	console.log(`selected ${value}`);
}

function Products() {
	return (
		<>
			<Layout>
				<Breadcrumb
					title="Products"
					link1="/"
					link2="/product"
					name1="Home"
					name2="Product"
				/>
				<div className="product">
					<div className="container">
						<Row>
							<Col span={24}>
								<div className="product__sort">
									<div className="product__sort-view">
										<a href>
											<FaThList />
										</a>
										<a href>
											<FaThLarge />
										</a>
									</div>
									<Select
										defaultValue="Price, low to high"
										style={{ width: 200 }}
										onChange={handleChange}
									>
										<Option value="lowToHigh">Price, low to high</Option>
										<Option value="hightoLow">Price, high to low</Option>
										<Option value="nameAtoZ">name, A-Z</Option>
										<Option value="nameZtoA">name, Z-A</Option>
									</Select>
								</div>
							</Col>
						</Row>
						<div className="product__items">
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
						<div className="product__pagination">
							<Row>
								<Col span={24}>
									<Pagination defaultCurrent={1} total={50} />
								</Col>
							</Row>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
}

export default React.memo(Products);
