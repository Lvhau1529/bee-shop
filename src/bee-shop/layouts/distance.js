import React from "react";
import { Row, Col } from "antd";
import Images from "../assets/images/12_850x.png";
import "../styles/components/distance.css";
import TitleBlock from "../components/center-title";
import NumberContent from "../components/number-content";

function Distance() {
	return (
		<>
			<div className="container">
				<Row className="distance">
					<Col span={24}>
						<TitleBlock title="Welcome to" main="Our Natural Honey" />
						<Row className="distance__bottom">
							<Col span={10}>
								<NumberContent
									number="01"
									title="Naturally Sweet"
									desc="Nullam molestie augue neque, vel lobortis ante ornare in. Aenean ultricies elementum augue, sit amet ornare lacus lacinia non."
								/>
								<NumberContent
									number="02"
									title="Naturally Sweet"
									desc="Nullam molestie augue neque, vel lobortis ante ornare in. Aenean ultricies elementum augue, sit amet ornare lacus lacinia non."
								/>
								<NumberContent
									number="03"
									title="Naturally Sweet"
									desc="Nullam molestie augue neque, vel lobortis ante ornare in. Aenean ultricies elementum augue, sit amet ornare lacus lacinia non."
								/>
							</Col>
							<Col span={12}>
								<img src={Images} alt="" />
							</Col>
						</Row>
					</Col>
				</Row>
			</div>
		</>
	);
}

export default React.memo(Distance);
