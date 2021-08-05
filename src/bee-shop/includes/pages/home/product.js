import React, { useContext } from "react";
import { Row, Col } from "antd";
import Slider from "react-slick";
import TitleBlock from "../../components/home/center-title";
import ProductItem from "../../components/product";
import { ProductContext } from "../../../../contexts/ProductContext";
import useUserAuth from "../../../../hooks/useUserAuth";

function Product() {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 4000,
		initialSlide: 2,
	};

	const productContext = useContext(ProductContext);

	const { products, get, add } = productContext;

	useUserAuth(get, null);

	return (
		<>
			<div class="product__block">
				<div class="product container">
					{/* <!-- Title --> */}
					<TitleBlock title="Cửa hàng" main="Sản phẩm nổi bật" />
					{/* <!-- ./Title --> */}

					{/* Product detail */}
					<div className="product__detail">
						<Slider {...settings}>
							{products.map((product) => (
								<Row>
									<Col span={24} key={product.id}>
										<ProductItem
											id={product.id}
											img={product.img}
											name={product.name}
											price={`$${product.price}`}
											sale={`$${product.sale}`}
											add={add(product.id, 1)}
											percent={
												product.sale === 0
													? ""
													: `-${Math.trunc(
															(parseInt(product.price) /
																parseInt(product.sale)) *
																100
													)}%`
											}
										/>
									</Col>
								</Row>
							))}
						</Slider>
					</div>
				</div>
			</div>
		</>
	);
}

export default React.memo(Product);
