import React from "react";
// import HomePage from "./includes/pages/home/index"
// import ProductsDetail from "./includes/pages/product/detail"
import Cart from "./includes/pages/cart/index";

function Welcome() {
	return (
		<>
			<Cart />
		</>
	);
}

export default React.memo(Welcome);
