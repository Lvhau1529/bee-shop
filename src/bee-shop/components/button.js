import React from "react";
import "../styles/components/button.css"

function Button(props) {
	return (
		<>
			<div class="button">
				<a href={props.link}>{props.title}</a>
			</div>
		</>
	);
}

export default React.memo(Button);
