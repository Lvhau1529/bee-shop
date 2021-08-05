import React from "react";
import { Row, Col } from "antd";
import Layout from "../../layouts/index";
import Breadcrumb from "../../components/breadcrumb";

function AboutUs() {
	return (
		<>
			<Layout>
				<Breadcrumb
					title="Về chúng tôi"
					link1="/"
					link2="/aboutus"
					name1="Trang chủ"
					name2="Về chúng tôi"
				/>
				<div className="aboutUs">
					<div className="container">
						<Row>
							<Col span={12}>
								<div className="aboutUs__img">
									<img
										src="https://cdn.shopify.com/s/files/1/0043/9690/8579/files/about-3_590x.png?v=1563177113"
										alt=""
									/>
								</div>
							</Col>
							<Col span={12}>
								<div className="aboutUs__content">
									<h1 className="aboutUs__title">Chúng tôi là ai</h1>
									<div className="aboutUs__description">
										<p>
											Công ty Mật ong BleBee chuyên sản xuất, kinh doanh và xuất
											khẩu Mật ong nguyên chất đi các thị trường khó tính nhất
											trên thế giới như: Tây Ban Nha, Pháp, Đức, Mỹ, Nhật.v.v
											với sản lượng xuất khẩu mỗi năm đạt hằng 1.000 tấn và là
											một trong số ít các công ty tại Việt Nam được phép xuất
											khẩu hàng mật ong đi châu Âu, Mỹ. Thị trường trong nước,
											với thương hiệu Mật Ong BleBee, sản phẩm đã được phân phối
											rộng khắp cả nước thông qua các kênh phân phối lớn.
										</p>
										<p>
											Với qui trình sản xuất khép kín và được kiểm tra nghiêm
											ngặt trong sản xuất, Mật Ong BleBee hãnh diện là công ty
											đầu tiên (trong ngành xuất khẩu mật ong) đạt tiêu chuẩn
											ISO 22000:2005 (ISO+HACCP+GMP). Đây là tiêu chuẩn khắt khe
											nhất để đảm bảo chất lượng và vệ sinh an toàn sản phẩm.
										</p>
									</div>
								</div>
							</Col>
						</Row>
					</div>
				</div>
			</Layout>
		</>
	);
}

export default React.memo(AboutUs);
