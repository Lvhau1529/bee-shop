import React from "react";
import Layout from "../../layouts/index";
import CartEmpty from "./cart-empty";

function Cart() {
	return (
		<>
			<Layout>
				<CartEmpty />
			</Layout>
		</>
	);
}

export default React.memo(Cart);
