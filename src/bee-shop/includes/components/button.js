import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
	return (
		<>
			<div class="button">
				<Link to={props.link}>{props.title}</Link>
			</div>
		</>
	);
}

export default React.memo(Button);
