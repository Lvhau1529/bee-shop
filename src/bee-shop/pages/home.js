import React from "react";
import HeaderComponent from "../components/header";
import BannerComponent from "../components/banner";
import DistanceComponent from "../layouts/distance";
import PolicyComponent from "../layouts/policy";
import Product from "../layouts/product";
import About from "../layouts/about";
import Story from "../layouts/story";
import Testimorial from "../layouts/testimorial";
import Blog from "../layouts/blog";
import Footer from "../layouts/footer";

function HomePage() {
	return (
		<>
			<HeaderComponent />
			<BannerComponent />
			<DistanceComponent />
			<PolicyComponent />
			<Product />
			<About />
			<Testimorial />
			<Story />
			<Blog />
			<Footer />
		</>
	);
}

export default React.memo(HomePage);
