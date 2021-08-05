import React from "react";
import { Row, Col } from "antd";
import Button from "../../components/button";
// import "../styles/layouts/story.css";
import img from "../../../assets/images/4_850x.webp";

function Story() {
	return (
		<>
			<div class="story__block">
				<div class="container">
					<div class="story row">
						<Row>
							<Col span={12}>
								<div class="story__left col-md-6">
									<div class="story__content">
										<div class="story__content--title">Câu chuyện của chúng tôi</div>
										<div class="story__content--sub-title">
											“ Mật ong thiên nhiên rất tốt cho sức khoẻ. ”
										</div>
										<div class="story__content--desc">
                    BleBee là đơn vị hàng đầu phân phối mật ong nguyên chất. Với sản phẩm 100% thiên nhiên, nguyên chất 100%,không chất bảo quản,không pha tạp chất luôn mang đến cho người tiêu dùng lựa chọn an toàn, chất lượng tốt nhất!
										</div>
										<Button title="Đọc thêm" />
									</div>
								</div>
							</Col>

							<Col span={12}>
								<div class="story__right col-md-6">
									<div class="story__img">
										<img src={img} alt="" />
									</div>
								</div>
							</Col>
						</Row>
					</div>
				</div>
			</div>
		</>
	);
}

export default React.memo(Story);
