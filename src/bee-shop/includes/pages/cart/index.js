import React from "react";
import Layout from "../../layouts/index";
import Cart from "./cart";

function CartPage() {
	return (
		<>
			<Layout>
				<Cart />
			</Layout>
		</>
	);
}

export default React.memo(CartPage);
