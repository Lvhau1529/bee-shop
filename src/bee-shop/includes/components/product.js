import React from "react"
import { Link } from "react-router-dom"

function ProductItem(props) {
	return (
		<>
			<div class="product__item col-md-3">
				<div class="product__img img-fluid">
					<Link to={`/product/${props.id}`}>
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
					<div className="product__cart cursor-pointer" onClick={props.add}>
						<span>Add to Cart</span>
					</div>
				</div>
			</div>
		</>
	)
}

export default React.memo(ProductItem)
