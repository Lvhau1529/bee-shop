import React from "react";
import Layout from "../../layouts/index";
import BannerComponent from "./banner";
import DistanceComponent from "./distance";
import PolicyComponent from "./policy";
import Product from "./product";
import About from "./about";
import Story from "./story";
import Testimorial from "./testimorial";
import Blog from "./blog";

function HomePage() {
	return (
		<>
			<Layout>
				<BannerComponent />
				<DistanceComponent />
				<PolicyComponent />
				<Product />
				<About />
				<Testimorial />
				<Story />
				<Blog />
			</Layout>
		</>
	);
}

export default React.memo(HomePage);
