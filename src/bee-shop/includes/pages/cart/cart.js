import React from "react";
import Breadcrumb from "../../components/breadcrumb";
import { Link } from "react-router-dom";
import { Row, Col, InputNumber, Input } from "antd";
import { RiDeleteBinLine } from "react-icons/ri";
import img1 from "../../../assets/images/4_2da966d0-5f84-4f25-b7ed-bcc6189053a4_155x.jpg";

function onChange(value) {
	console.log("changed", value);
}

const { TextArea } = Input;

function Cart() {
	return (
		<>
			<Breadcrumb
				title="Your Cart"
				link1="/"
				link2="/cart"
				name1="Home"
				name2="Your Cart"
			/>
			<div className="cart">
				<div className="container">
					<Row>
						<Col span={24}>
							<div className="cart__table">
								<form action="" className="control-form">
									<table>
										<tr>
											<th>Product</th>
											<th>Price</th>
											<th>Quantity</th>
											<th>Total</th>
										</tr>
										{/* Product 1 */}
										<tr className="product-cart__content">
											<td className="product-cart d-flex align-items-center">
												<div className="table__img">
													<img src={img1} alt="" />
												</div>
												<div className="table__detail">
													<div className="table__detail-name">
														<Link to="/detail">Morbi viverra hend</Link>
													</div>
													<div className="table__detail-size">Size: 50ml</div>
												</div>
												<div className="table__button">
													<Link to="">
														<RiDeleteBinLine />
													</Link>
												</div>
											</td>
											{/* Price */}
											<td className="price">$130</td>
											<td>
												<InputNumber
													min={1}
													max={10}
													defaultValue={1}
													onChange={onChange}
												/>
											</td>
											{/* Total */}
											<td className="total">$130</td>
										</tr>

										{/* Product 2 */}
										<tr className="product-cart__content">
											<td className="product-cart d-flex align-items-center">
												<div className="table__img">
													<img src={img1} alt="" />
												</div>
												<div className="table__detail">
													<div className="table__detail-name">
														<Link to="/detail">Pellentesque lacinia</Link>
													</div>
													<div className="table__detail-size">Size: 150ml</div>
												</div>
												<div className="table__button">
													<Link to="">
														<RiDeleteBinLine />
													</Link>
												</div>
											</td>
											{/* Price */}
											<td className="price">$200</td>
											<td>
												<InputNumber
													min={1}
													max={10}
													defaultValue={1}
													onChange={onChange}
												/>
											</td>
											{/* Total */}
											<td className="total">$200</td>
										</tr>
									</table>
								</form>
							</div>
						</Col>
					</Row>

					<Row className="cart__footer">
						<Col span={12} className="cart__footer-note">
							<TextArea placeholder="Add a note to your order" rows={4} />
						</Col>
						<Col span={12} className="cart__footer-check">
							<div className="check__total d-flex justify-content-end">
								<div className="check__total-title">Total:</div>
								<div className="check__total-price">$330</div>
							</div>
							<p>Shipping & taxes calculated at checkout</p>
							<div className="check__button">
								<Link to="/product">Continue Shopping</Link>
								<Link to="">Update</Link>
								<Link to="">Check out</Link>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
}

export default React.memo(Cart);
