import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import { FiChevronRight } from "react-icons/fi";

function Breadcrumb(props) {
	return (
		<>
			<div className="breadcrumb" style={props.style}>
				<Row className="text-center">
					<Col span={24}>
						<div className="breadcrumb__title">{props.title}</div>
					</Col>
					<Col span={24}>
						<ul className="breadcrumb__list d-flex justify-content-center">
							<li className="breadcrumb__list-item">
								<Link to={props.link1}>{props.name1}</Link>
							</li>
							<li className="breadcrumb__list-item">
								<Link className="d-flex align-items-center" to={props.link2}>
									<FiChevronRight className="item__icon" />
									{props.name2}
								</Link>
							</li>
						</ul>
					</Col>
				</Row>
			</div>
		</>
	);
}

export default React.memo(Breadcrumb);
