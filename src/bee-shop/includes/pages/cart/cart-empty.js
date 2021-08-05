import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

function CartEmpty() {
	return (
		<>
			<div className="cart-empty">
				<div className="container">
					<Row>
						<Col span={24}>
							<div className="cart-empty__content text-center">
								<div className="cart-empty__content-title">
									Không có sản phẩm trong giỏ hàng.
								</div>
								<div className="cart-empty__content-desc">
									<p>
										Trước khi tiến hành thanh toán, bạn phải thêm một số sản
										phẩm vào giỏ hàng của mình.
									</p>
									<p>
										Bạn sẽ tìm thấy rất nhiều sản phẩm tốt trên trang "Cửa hàng"
										của chúng tôi.
									</p>
								</div>
								<div className="cart-empty__content-button">
									<Link to="/product" className="button">
										Tiếp tục mua sắm
									</Link>
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
