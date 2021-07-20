import React, { useContext } from "react";
import Breadcrumb from "../../components/breadcrumb";
import CartEmpty from "./cart-empty";
import { Link, useHistory } from "react-router-dom";
import { Row, Col, InputNumber, Input, notification } from "antd";
import { RiDeleteBinLine } from "react-icons/ri";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import { ProductContext } from "../../../../contexts/ProductContext";
import useUserAuth from "../../../../hooks/useUserAuth";

const { TextArea } = Input;

function Cart() {
	const productContext = useContext(ProductContext);
	const {
		cartProducts,
		cartTotal,
		removeCart,
		getCartProducts,
		changeCountNumber,
		sendEmail,
	} = productContext;

	const history = useHistory();

	useUserAuth(getCartProducts, null);

	// Notification
	const openNotificationCheckOut = (type) => {
		notification[type]({
			message: "Checkout successfully",
			description:
				"We will contact you soon",
		});
	};

	// Checkout function
	const checkout = async () => {
		try {
			await sendEmail();
			openNotificationCheckOut('success');
			// alert("Checkout successfully. We will contact you soon");
			history.push("/product");
		} catch (err) {
			console.error(err);
			alert(err.message);
		}
	};

	// Modalbox checkout
	const { confirm } = Modal;
	const showConfirm = () => {
		confirm({
			title: "Do you Want to buy these products?",
			icon: <ExclamationCircleOutlined />,
			onOk() {
				checkout();
			},
			onCancel() {
				console.log("Cancel");
			},
		});
	};

	const onChange = (productId) => (value) => {
		changeCountNumber(productId)(value);
	};

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
					{cartProducts.length === 0 ? (
						<CartEmpty />
					) : (
						<>
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
												{cartProducts.map((product) => (
													<tr
														key={product.id}
														className="product-cart__content"
													>
														<td className="product-cart d-flex align-items-center">
															<div className="table__img">
																<img src={product.img} alt="" />
															</div>
															<div className="table__detail">
																<div className="table__detail-name">
																	<Link to="/detail">{product.name}</Link>
																</div>
															</div>
															<div
																className="table__button"
																onClick={removeCart(product.id)}
															>
																<RiDeleteBinLine />
															</div>
														</td>
														{/* Price */}
														<td className="price">${product.price}</td>
														<td>
															<InputNumber
																min={1}
																max={10}
																defaultValue={product.count}
																onChange={onChange(product.id)}
															/>
														</td>
														{/* Total */}
														<td className="total">
															${product.price * product.count}
														</td>
													</tr>
												))}
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
										<div className="check__total-price">${cartTotal}</div>
									</div>
									<p>Shipping & taxes calculated at checkout</p>
									<div className="check__button">
										<Link to="/product">Continue Shopping</Link>
										<span onClick={showConfirm}>Check out</span>
									</div>
								</Col>
							</Row>
						</>
					)}
				</div>
			</div>
		</>
	);
}

export default React.memo(Cart);
