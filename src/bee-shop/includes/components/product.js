import React from "react";
import {Link} from "react-router-dom";

function ProductItem(props) {
	return (
		<>
			<div class="product__item col-md-3">
				<div class="product__img img-fluid">
					<Link to="/detail">
						<img src={props.img} alt="" />
					</Link>
				</div>
				<div class="product__info">
					<div class="product__name">
						<Link to="/detail">{props.name}</Link>
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
						<Link>
							<span>Add to Cart</span>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default React.memo(ProductItem)
