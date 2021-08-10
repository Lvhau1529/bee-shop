import React, { useEffect } from "react";
import WOW from "wowjs";
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
	useEffect(() => {
		const wow = new WOW.WOW();
		wow.init();
	});
	
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
