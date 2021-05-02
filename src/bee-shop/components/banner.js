import React from "react";
import { Row, Col } from "antd";
import "../styles/components/banner.css";

function Banner() {
	return (
		<>
			<Row>
				<Col span={24}>
					<div className="banner">
						<div className="caption">
							<div className="caption__content">
								<div className="titlle">Honey Yoghurt</div>
								<div className="sub-title">Hot trending</div>
								<div className="content">
									Maecenas varius urna et diam ultrices luctus. Sed lobortis,
									nulla viverra hendrerit auctor, ipsum est feugiat nisi, eget
									bibendum arcu orci ac risus. Ut egestas vitae lectus eu
									pretium.
								</div>
								<div className="button">
									<a href>Buy Now</a>
								</div>
							</div>
						</div>
					</div>
				</Col>
			</Row>
		</>
	);
}

export default React.memo(Banner);
