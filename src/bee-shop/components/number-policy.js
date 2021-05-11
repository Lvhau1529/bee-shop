import React from "react";
import { Col } from "antd";
import "../styles/components/number-policy.css";

function NumberPolicy(props) {
	return (
		<>
			<Col span={8}>
				<div class="policy__content col-md-4 col-sm-12">
					<div class="policy__img">
						<img src={props.img} alt="" />
					</div>
					<div class="policy__info">
						<div class="policy__info--title">{props.title}</div>
						<div class="policy__info--decs">{props.decs}</div>
					</div>
					<div class="policy__number">{props.number}</div>
				</div>
			</Col>
		</>
	);
}

export default React.memo(NumberPolicy);
