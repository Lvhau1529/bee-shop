import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Skeleton, Result, Button } from "antd";

const HomeComponent = lazy(() => import("./includes/pages/home/index"));
const CartComponent = lazy(() => import("./includes/pages/cart/index"));
const ProductComponent = lazy(() => import("./includes/pages/product/index"));
const ProductDetail = lazy(() => import("./includes/pages/product/detail"))

function Welcome() {
	return (
		<>
			<Router>
				<Suspense fallback={<Skeleton active />}>
					<Switch>
						<Route path="/home">
							<HomeComponent />
						</Route>

						<Route path="/cart">
							<CartComponent />
						</Route>

						<Route path="/product">
							<ProductComponent />
						</Route>

						<Route path="/detail">
							<ProductDetail />
						</Route>

						<Route extract path="/">
							<Result
								status="404"
								title="404"
								subTitle="Sorry, the page you visited does not exist."
								extra={
									<Button type="primary">
										<Link to="/home">Back Home</Link>
									</Button>
								}
							/>
						</Route>
					</Switch>
				</Suspense>
			</Router>
		</>
	);
}

export default React.memo(Welcome);
