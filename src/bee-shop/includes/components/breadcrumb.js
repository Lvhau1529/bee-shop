import React from "react";
import { Row, Col } from "antd";
import { FiChevronRight } from "react-icons/fi";

function Breadcrumb(props) {
	return (
		<>
			<div className="breadcrumb">
				<Row className="text-center">
					<Col span={24}>
						<div className="breadcrumb__title">{props.title}</div>
					</Col>
					<Col span={24}>
						<ul className="breadcrumb__list d-flex justify-content-center">
							<li className="breadcrumb__list-item">
								<a href>{props.link1}</a>
							</li>
							<li className="breadcrumb__list-item">
								<FiChevronRight className="item__icon"/>
							</li>
							<li className="breadcrumb__list-item">
								<a href>{props.link2}</a>
							</li>
						</ul>
					</Col>
				</Row>
			</div>
		</>
	);
}

export default React.memo(Breadcrumb);
