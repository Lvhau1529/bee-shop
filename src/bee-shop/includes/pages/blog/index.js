import React from "react";
import Layout from "../../layouts/index";
import BlogLayout from "./blog";

function Blog() {
	return (
		<>
			<Layout>
				<BlogLayout />
			</Layout>
		</>
	);
}

export default React.memo(Blog);