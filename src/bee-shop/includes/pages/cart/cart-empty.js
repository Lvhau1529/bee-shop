import React from "react";
import { Row, Col } from "antd";
import Breadcrumb from "../../components/breadcrumb";

function CartEmpty() {
	return (
		<>
			<Breadcrumb title="Your Cart" link1="Home" link2="Your cart" />
			<div className="cart-empty">
				<div className="container">
					<Row>
						<Col span={24}>
							<div className="cart-empty__content text-center">
								<div className="cart-empty__content-title">
									Your cart is currently empty.
								</div>
								<div className="cart-empty__content-desc">
									<p>
										Before proceeding to checkout you must add some products to
										your shopping cart.
									</p>
									<p>
										You will find a lot of interesting products on our "Shop"
										page.
									</p>
								</div>
								<div className="cart-empty__content-button">
									<a href className="button">
										Continue shopping
									</a>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
}

export default React.memo(CartEmpty);
