import React from "react";
import { Row } from "antd";
import img1 from "../../../assets/images/9_72x.webp";
import img2 from "../../../assets/images/10_72x.webp";
import img3 from "../../../assets/images/11_72x.webp";
import NumberPolicy from "../../components/home/number-policy";

function Policy() {
	return (
		<>
			<div class="policy__block">
				<div class="container">
					<div class="policy wow animate__animated animate__fadeInDown">
						<Row>
							<NumberPolicy
								img={img1}
								title="Giao hàng nhanh"
								decs="Đặt đơn giao hàng nhanh chóng, tiết kiệm thời gian tối đa."
								number="01"
							/>

							<NumberPolicy
								img={img2}
								title="Hoàn lại tiền"
								decs="Chúng tôi sẽ hoàn lại tiền nếu bạn phát hiện sản phẩm kém chất lượng."
								number="02"
							/>
              
							<NumberPolicy
								img={img3}
								title="Hỗ trợ 24/7"
								decs="Bạn có thể yêu cầu hỗ trợ bằng nhiều hình thức như qua hotline, email."
								number="03"
							/>
						</Row>
					</div>
				</div>
			</div>
		</>
	);
}

export default React.memo(Policy);
