import React from "react";
import HeaderComponent from "../components/header";
import BannerComponent from "../components/banner";
import DistanceComponent from "../components/distance";
import PolicyComponent from "../components/policy";

function HomePage() {
	return (
		<>
			<HeaderComponent />
      <BannerComponent />
      <DistanceComponent />
      <PolicyComponent />
		</>
	);
}

export default React.memo(HomePage);
