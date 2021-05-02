import React from "react";
import { Row, Col } from "antd";

function Policy() {
	return (
		<>
			<Row>
				<Col span={8}>
					<div className="block__content">
						<div className="content__policy">
							<div className="policy__icon"></div>
							<div className="policy__info">
								<div className="policy__info--title">
									Shipping Fast & Free Delivery
								</div>
								<div className="policy__info--desc">
									Nam liber tempor cum soluta nobiseleifend option congue.
								</div>
							</div>
						</div>
						<div className="content__number">01</div>
					</div>
				</Col>
				<Col span={8}>
					<div className="block__content">
						<div className="content__policy">
							<div className="policy__icon"></div>
							<div className="policy__info">
								<div className="policy__info--title">
									Money Back & Guarantee
								</div>
								<div className="policy__info--desc">
									Claritas est etiam processus dynamicus, sequitur mutationem
								</div>
							</div>
						</div>
						<div className="content__number">02</div>
					</div>
				</Col>
				<Col span={8}>
					<div className="block__content">
						<div className="content__policy">
							<div className="policy__icon"></div>
							<div className="policy__info">
								<div className="policy__info--title">Online Support 24/7</div>
								<div className="policy__info--desc">
									Nam liber tempor cum soluta nobiseleifend option congue.
								</div>
							</div>
						</div>
						<div className="content__number">03</div>
					</div>
				</Col>
			</Row>
		</>
	);
}

export default React.memo(Policy);
