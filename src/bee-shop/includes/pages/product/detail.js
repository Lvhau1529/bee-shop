import React from "react";
import { Row, Col, Rate, Radio, InputNumber } from "antd";
import Layout from "../../layouts/index";
import Breadcrumb from "../../components/breadcrumb";
import Slider from "./slider";

function onChange(value) {
	console.log("changed", value);
}

function DeltailProduct() {
	return (
		<>
			<Layout>
				<Breadcrumb
					title="Products"
					link1="/home"
					link2="/detail"
					name1="Home"
					name2="Detail"
				/>
				<div className="detail">
					<div className="container">
						<Row>
							<Col span={14}>
								<div className="detail__img">
									<Slider />
									{/* <div className="detail__img-silde slider-nav"></div>
								<div className="detail__img-main slider-for"></div> */}
								</div>
							</Col>
							<Col span={10}>
								<div className="detail__product">
									<div className="detail__product-name">Proin nulla dui</div>
									<div className="detail__product-desc">
										Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
										Aenean commodo ligula eget dolor. Aenean massa....
									</div>
									<div className="detail__product-status d-flex justify-content-between align-items-center">
										<div className="status__rate">
											<Rate allowHalf defaultValue={5} />
										</div>
										<div className="status__available">In-stock</div>
									</div>
									<div className="detail__product-price d-flex align-items-center">
										<div className="price__main">$140.00</div>
										<div className="price__sale">$280.00</div>
									</div>
									<div className="detail__product-size">
										<p>Size: </p>
										<Radio.Group defaultValue="a" buttonStyle="solid">
											<Radio.Button value="a">50ml</Radio.Button>
											<Radio.Button value="b">100ml</Radio.Button>
											<Radio.Button value="c">150ml</Radio.Button>
											<Radio.Button value="d">230ml</Radio.Button>
										</Radio.Group>
									</div>
									<div className="detail__product-cart d-flex align-items-center">
										<InputNumber
											min={1}
											max={10}
											defaultValue={1}
											onChange={onChange}
										/>
										<div className="cart__button">
											<a href>Add to Cart</a>
										</div>
									</div>
								</div>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<div className="detail__tab">
									<ul className="detail__tab-list d-flex">
										<li className="list__item">
											<a href>Description</a>
										</li>
										<li className="list__item">
											<a href>Reviews</a>
										</li>
									</ul>
									<div className="detail__tab-content">
										<p>
											Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
											Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
											natoque penatibus et magnis dis parturient montes,
											nascetur ridiculus mus. Donec quam felis, ultricies nec,
											pellentesque New producteu, pretium quis, sem. Nulla
											consequat massa quis enim. Donec pede justo, fringilla
											vel, aliquet nec, vulputate eget, arcu.
										</p>
										<p>
											Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
											Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
											natoque penatibus et magnis dis parturient montes,
											nascetur ridiculus mus.
										</p>
									</div>
								</div>
							</Col>
						</Row>
					</div>
				</div>
			</Layout>
		</>
	);
}

export default React.memo(DeltailProduct);
