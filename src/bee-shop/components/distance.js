import React from "react";
import { Row, Col } from "antd";
import "../styles/components/banner.css";

function Distance() {
	return (
		<>
			<Row>
				<Col span={24}>
					<Row>
						<Col span={24}>
							<div className="block">
								<div className="title__block">
									<div className="sub__title">Welcome to</div>
									<span>Our Natural Honey</span>
								</div>
							</div>
						</Col>
					</Row>
					<Row>
						<Col span={12}>
							<div className="box-content">
								<div className="number-content">01</div>
								<div className="content-about">
									<div className="title__about">Naturally Sweet</div>
									<div className="des__about">
										<p>
											Nullam molestie augue neque, vel lobortis ante ornare in.
											Aenean ultricies elementum augue, sit amet ornare lacus
											lacinia non.
										</p>
									</div>
								</div>
							</div>
						</Col>
						<Col span={12}>
							<img src="" alt="" />
						</Col>
					</Row>
				</Col>
			</Row>
		</>
	);
}

export default React.memo(Distance);
