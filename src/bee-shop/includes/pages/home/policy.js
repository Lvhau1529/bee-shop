import React from "react";
import { Row, Col } from "antd";
import img1 from "../../../assets/images/9_72x.webp";
import img2 from "../../../assets/images/10_72x.webp";
import img3 from "../../../assets/images/11_72x.webp";
import NumberPolicy from "../../components/home/number-policy";
// import "../styles/layouts/policy.css";

function Policy() {
	return (
		<>
			<div class="policy__block">
				<div class="container">
					<div class="policy animate__animated animate__fadeInDown">
						<Row>
							<NumberPolicy
								img={img1}
								title="Shipping Fast & Free Delivery"
								decs="Nam liber tempor cum soluta nobiseleifend option congue."
								number="01"
							/>
							<Col span={8}>
								<div class="policy__content col-md-4 col-sm-12">
									<div class="policy__number">02</div>
									<div class="policy__img">
										<img src={img2} alt="" />
									</div>
									<div class="policy__info">
										<div class="policy__info--title">
											Shipping Fast & Free Delivery
										</div>
										<div class="policy__info--decs">
											Nam liber tempor cum soluta nobiseleifend option congue.
										</div>
									</div>
								</div>
							</Col>

							<NumberPolicy
								img={img3}
								title="Online Support 24/7"
								decs="Nam liber tempor cum soluta nobiseleifend option congue."
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
