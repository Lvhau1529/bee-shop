import React from "react";

function ProductItem(props) {
	return (
		<>
			<div class="product__item col-md-3">
				<div class="product__img img-fluid">
					<a href>
						<img src={props.img} alt="" />
					</a>
				</div>
				<div class="product__info">
					<div class="product__name">
						<a href>{props.name}</a>
					</div>
					<div class="product__price">
						<div class="product__price--regular">
							<span>{props.price}</span>
						</div>
						<div class="product__price--sale">
							<span>{props.sale}</span>
						</div>
					</div>
					<div className="product__cart">
						<a href>
							<span>Add to Cart</span>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default React.memo(ProductItem)
