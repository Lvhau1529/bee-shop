import React from "react";
import HeaderComponent from "../components/header";
import BannerComponent from "../components/banner";
import DistanceComponent from "../layouts/distance";
import PolicyComponent from "../layouts/policy";
import Footer from "../layouts/footer";

function HomePage() {
	return (
		<>
			<HeaderComponent />
			<BannerComponent />
			<DistanceComponent />
			<PolicyComponent />
			<Footer />
		</>
	);
}

export default React.memo(HomePage);
