import React, { lazy, Suspense } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useHistory,
} from "react-router-dom";
import { Skeleton, Result, Button } from "antd";

import useUserAuth from "../hooks/useUserAuth";

const HomeComponent = lazy(() => import("./includes/pages/home/index"));
const CartComponent = lazy(() => import("./includes/pages/cart/index"));
const ProductComponent = lazy(() => import("./includes/pages/product/index"));
const ProductDetail = lazy(() => import("./includes/pages/product/detail"));
const BlogComponent = lazy(() => import("./includes/pages/blog/index"));
const AboutUsComponent = lazy(() => import("./includes/pages/about_us/index"))
const ContactComponent = lazy(() => import("./includes/pages/contact/index"))
const NewsComponent = lazy(() => import("./includes/pages/blog/detail"))

const AddProduct = lazy(() => import("../containers/Hiddens/AddProduct"));
const RemoveProduct = lazy(() => import("../containers/Hiddens/RemoveProduct"));
const RemoveComment = lazy(() => import("../containers/Hiddens/RemoveComment"));

function BeeShop() {
	const history = useHistory();
	useUserAuth(null, () => history.push("/login"));

	return (
		<>
			<Router>
				<Suspense fallback={<Skeleton active />}>
					<Switch>
						<Route exact path="/">
							<HomeComponent />
						</Route>

						<Route path="/cart">
							<CartComponent />
						</Route>

						<Route path="/product" exact>
							<ProductComponent />
						</Route>

						<Route path="/news" exact>
							<BlogComponent />
						</Route>
						
            <Route path="/news/detail">
							<NewsComponent />
						</Route>

            <Route path="/about_us">
              <AboutUsComponent />
            </Route>
            
            <Route path="/contact">
              <ContactComponent />
            </Route>

						<Route path="/dashboard/addProduct">
							<AddProduct />
						</Route>

						<Route path="/dashboard/removeProduct">
							<RemoveProduct />
						</Route>
						
            <Route path="/dashboard/removeComment">
							<RemoveComment />
						</Route>

						<Route path="/product/:id" exact>
							<ProductDetail />
						</Route>

						<Route exact path="*">
							<Result
								status="404"
								title="404"
								subTitle="Sorry, the page you visited does not exist."
								extra={
									<Button type="primary">
										<Link to="/">Back Home</Link>
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

export default React.memo(BeeShop);
