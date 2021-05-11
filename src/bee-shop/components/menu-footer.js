import React from "react";
import { Col } from "antd";
import "../styles/layouts/footer.css";

function FooterMenu(props) {
	return (
		<>
			<Col span={6} class="col-md-3">
				<div class="footer__title">{props.title}</div>
				<div class="footer__nav">
					<ul class="footer__nav-list">
						<li class="footer__nav-item">
							<a href class="footer__nav-link">
								{props.link_1}
							</a>
						</li>
						<li class="footer__nav-item">
							<a href class="footer__nav-link">
								{props.link_2}
							</a>
						</li>
						<li class="footer__nav-item">
							<a href class="footer__nav-link">
								{props.link_3}
							</a>
						</li>
						<li class="footer__nav-item">
							<a href class="footer__nav-link">
								{props.link_4}
							</a>
						</li>
						<li class="footer__nav-item">
							<a href class="footer__nav-link">
								{props.link_5}
							</a>
						</li>
					</ul>
				</div>
			</Col>
		</>
	);
}

export default React.memo(FooterMenu);
