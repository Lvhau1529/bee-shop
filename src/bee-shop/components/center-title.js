import React from "react";
import "../styles/components/center-title.css";

function Title(props) {
	return (
		<>
			<div className="title-block">
				<div className="title-block__sub">
					<p>{props.title}</p>
				</div>
				<div className="title-block__main">
					<p>{props.main}</p>
				</div>
			</div>
		</>
	);
}

export default React.memo(Title);
