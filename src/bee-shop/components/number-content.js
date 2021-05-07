import React from "react";
import "../styles/components/number-content.css";

function NumberContent(props) {
	return (
		<>
			<div class="distance__left">
				<div class="distance__content">
					<div class="content__number">{props.number}</div>
					<div class="content__about">
						<div class="content__about--title">{props.title}</div>
						<div class="content__about--desc">
							<p>{props.desc}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default React.memo(NumberContent);
