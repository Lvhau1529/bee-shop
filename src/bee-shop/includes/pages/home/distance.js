import React from "react";
import { Row, Col } from "antd";
import Images from "../../../assets/images/12_850x.png";
import TitleBlock from "../../components/home/center-title";
import NumberContent from "../../components/home/number-content";
// import "../styles/layouts/distance.css";

function Distance() {
	return (
		<>
			<div class="block">
				<div class="distance container">
					<TitleBlock title="Welcome to" main="Mật ong tự nhiên" />
					<Row className="distance__bottom">
						<Col span={10}>
							<NumberContent
								number="01"
								title="Vị ngọt từ thiên nhiên"
								desc="Nullam molestie augue neque, vel lobortis ante ornare in. Aenean ultricies elementum augue, sit amet ornare lacus lacinia non."
							/>
							<NumberContent
								number="02"
								title="Tốt cho sức khoẻ"
								desc="Nullam molestie augue neque, vel lobortis ante ornare in. Aenean ultricies elementum augue, sit amet ornare lacus lacinia non."
							/>
							<NumberContent
								number="03"
								title="Không chất bảo quản"
								desc="Nullam molestie augue neque, vel lobortis ante ornare in. Aenean ultricies elementum augue, sit amet ornare lacus lacinia non."
							/>
						</Col>
						<Col span={12}>
							<img src={Images} alt="" />
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
}

export default React.memo(Distance);
