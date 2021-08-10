import React from "react";
import { Row, Col } from "antd";
import Images from "../../../assets/images/12_850x.png";
import TitleBlock from "../../components/home/center-title";
import NumberContent from "../../components/home/number-content";

function Distance() {
	return (
		<>
			<div class="block">
				<div class="distance container">
					<TitleBlock title="Welcome to" main="Mật ong tự nhiên" />
					<Row className="distance__bottom">
						<Col span={10} className="wow animate__animated animate__bounceInLeft">
							<NumberContent
								number="01"
								title="Vị ngọt từ thiên nhiên"
								desc="Mật ong là loại thực phẩm được yêu thích nhờ hương vị thơm ngon, hấp dẫn và giàu các dưỡng chất quan trọng cho sức khoẻ."
							/>
							<NumberContent
								number="02"
								title="Tốt cho sức khoẻ"
								desc="Được sản xuất với quy trình công nghệ hiện đại. Mọi sản phẩm đều đảm bảo tính an toàn vệ sinh cho người sử dụng."
							/>
							<NumberContent
								number="03"
								title="Không chất bảo quản"
								desc="Chúng tôi nói không với việc sử dụng các chất bảo quản, chất tạo màu. Sản phẩm của chúng tôi giữ lại 100% hương vị tự nhiên "
							/>
						</Col>
						<Col span={12} className="wow animate__animated animate__bounceInRight">
							<img src={Images} alt="" />
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
}

export default React.memo(Distance);
