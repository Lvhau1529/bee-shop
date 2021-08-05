import React from "react";
import { Row, Col } from "antd";
import Parse from "html-react-parser";
import Layout from "../../layouts/index";
import Breadcrumb from "../../components/breadcrumb";

function BlogDetail() {
	const article = `
<p>
	<strong>Mật ong kh&ocirc;ng hề g&acirc;y b&eacute;o như bạn vẫn nghĩ ? Ngo&agrave;i việc l&agrave; nguy&ecirc;n liệu của nhiều m&oacute;n ăn, đồ uống hấp dẫn, mật ong gi&uacute;p bạn giảm c&acirc;n v&agrave; mang lại vẻ đẹp khỏe mạnh từ b&ecirc;n trong.</strong>
</p>

<p>
	Những g&igrave; bạn nghĩ về mật ong l&agrave;:
</p>

<ul>
	<li>
		N&oacute; đầy đường!
	</li>
	<li>
		N&oacute; rất ngọt ?
	</li>
	<li>
		Mật ong chắc chắn sẽ g&acirc;y b&eacute;o.
	</li>
</ul>

<p>
	Nhưng h&atilde;y qu&ecirc;n những &yacute; nghĩ đ&oacute;, v&igrave; mật ong thực sự tốt cho bạn đấy! Uống một cốc nước mật ong ấm h&agrave;ng ng&agrave;y c&oacute; thể l&agrave;m tăng sức khỏe của bạn, ngăn ngừa chống lại bệnh tật v&agrave; thậm ch&iacute; c&ograve;n gi&uacute;p bạn giảm c&acirc;n. Dưới đ&acirc;y l&agrave; những t&aacute;c dụng si&ecirc;u bất ngờ từ mật ong m&agrave; bạn chưa từng nghĩ tới.
</p>

<h2>
	<strong>1. Gi&uacute;p l&agrave;n da khỏe mạnh từ b&ecirc;n trong</strong>
</h2>

<p>
	Mật ong l&agrave; một chất chống oxy h&oacute;a tự nhi&ecirc;n, n&oacute; gi&uacute;p loại bỏ chất thải trong cơ thể v&agrave; nhờ v&agrave;o t&iacute;nh chất kh&aacute;ng khuẩn n&oacute; gi&uacute;p giữ cho l&agrave;n da của bạn sạch sẽ v&agrave; khỏe mạnh hơn bao giờ hết.
</p>

<h2>
	<strong>2.&nbsp;</strong><strong>Tăng cường hệ thống miễn dịch của bạn</strong>
</h2>

<p>
	Mật ong đang sở hữu những &ldquo;t&iacute;nh năng&rdquo; l&agrave;m tăng t&iacute;nh miễn dịch kh&aacute; ấn tượng. H&atilde;y chắc chắn l&agrave; bạn đang sử dụng mật ong nguy&ecirc;n chất (ong nu&ocirc;i/ong rừng) để đạt được lợi &iacute;ch tối đa từ c&aacute;c enzym, vitamin v&agrave; kho&aacute;ng chất- thứ sẽ bảo vệ bạn chống lại bất kỳ vi khuẩn n&agrave;o x&acirc;m hại tới hệ miễn dịch.
</p>

<p>
	<img alt="mat-ong-va-nhung-dieu-ban-chua-biet-" src="http://images.cfyc.com.vn/mat-ong-va-nhung-dieu-ban-chua-biet-2.jpg" style="width: 750px;display: block;margin-left: auto;margin-right: auto">
</p>

<p style="text-align: center">
	<em>Uống nước mật ong hằng ng&agrave;y gi&uacute;p tăng đề kh&aacute;ng, cảm nhận sức khỏe từ b&ecirc;n trong</em>
</p>

<h2>
	<strong>3.&nbsp;</strong><strong>Bạn sẽ giảm c&acirc;n nhờ mật ong</strong>
</h2>

<p>
	Đ&uacute;ng! Mật ong chứa rất nhiều đường nhưng n&oacute; ho&agrave;n to&agrave;n kh&aacute;c với đường trắng th&ocirc;ng thường. Đường tự nhi&ecirc;n của mật ong, theo c&aacute;c nghi&ecirc;n cứu sẽ gi&uacute;p thỏa m&atilde;n cảm gi&aacute;c th&egrave;m ăn ngọt h&agrave;ng ng&agrave;y của bạn. V&agrave; nếu bạn thay th&oacute;i quen ăn kẹo, uống nước c&oacute; gas bằng việc uống một ly nước mật ong th&igrave; bạn sẽ tiết kiệm đến hơn 64% calo!
</p>

<h2>
	<strong>4.&nbsp;</strong><strong>L&agrave; phương thuốc chữa đau họng</strong>
</h2>

<p>
	L&yacute; do khiến nước mật ong ấm l&agrave; một thức uống ưu chuộng trong những ng&agrave;y lạnh l&agrave; v&igrave; n&oacute; c&oacute; thể gi&uacute;p l&agrave;m dịu cổ họng bị đau v&agrave; l&agrave;m ấm cơ thể. Mật ong l&agrave; một phương thuốc tự nhi&ecirc;n cho bệnh nhiễm tr&ugrave;ng đường h&ocirc; hấp v&agrave; ho th&ocirc;ng thường. V&igrave; vậy h&atilde;y thử &aacute;p dụng v&agrave; tận hưởng lợi &iacute;ch m&agrave; mật ong đem lại, đặc biệt trong thời gian giao m&ugrave;a như thế n&agrave;y.
</p>

<p>
	<img alt="mat-ong-va-nhung-dieu-ban-chua-biet-1" src="http://images.cfyc.com.vn/mat-ong-va-nhung-dieu-ban-chua-biet.jpg" style="width: 750px;display: block;margin-left: auto;margin-right: auto;">
</p>

<p style="text-align:center">
	<em>Nước mật ong n&oacute;ng l&agrave; thưc uống cực k&igrave; tốt cho những ng&agrave;y lạnh</em>
</p>

<h2>
	<strong>5. Điều chỉnh lượng đường trong m&aacute;u</strong>
</h2>

<p>
	Như đ&atilde; đề cập ph&iacute;a tr&ecirc;n, mật ong ho&agrave;n to&agrave;n l&agrave; đường tụ nhi&ecirc;n, kết hợp của fructose v&agrave; glucose, kh&ocirc;ng những gi&uacute;p cơ thể điều chỉnh lượng đường trong m&aacute;u m&agrave; c&ograve;n l&agrave;m giảm lượng cholesterol dư thừa.
</p>

<h2>
	<strong>6. Ngăn chặn nguy cơ bệnh tim</strong>
</h2>

<p>
	Nghi&ecirc;n cứu đ&atilde; chỉ ra rằng mật ong v&agrave; c&aacute;c chất oxi h&oacute;a của n&oacute; c&oacute; t&aacute;c dụng l&agrave;m chậm lại qu&aacute; tr&igrave;nh oxy h&oacute;a của cholesterol xấu trong m&aacute;u, v&igrave; thế giảm nguy cơ mắc c&aacute;c bệnh tim mạch. Với tất cả những t&aacute;c dụng tuyệt vời ấy, c&ograve;n chần chừ g&igrave; m&agrave; kh&ocirc;ng l&agrave;m ngay cho m&igrave;nh một ly nước mật ong ấm n&agrave;o!
</p>

<p>
	&nbsp;
</p>`;
	return (
		<>
			<Layout>
				<Breadcrumb
					title="Bài viết"
					link1="/"
					link2="/news"
					name1="Trang chủ"
					name2="Tin tức"
				/>
				<div className="container">
					<Row>
						<Col span={24}>
							<div className="blog-detail">
								<div className="blog__content">
									<div className="blog__content-img d-flex justify-content-center">
										<img style={{marginBottom: "2rem", maxWidth: "60rem"}}
											src="https://cdn.shopify.com/s/files/1/0043/9690/8579/articles/1_1024x1024.png?v=1563174742"
											alt=""
										/>
									</div>
									<div className="blog__content-title">
										Những điều có thể bạn chưa biết về mật ong
									</div>
									<div className="blog__content-text">{Parse(article)}</div>
									{/* <div className="blog__content-info d-flex justify-content-center">
										<div className="info__comment">0 Comments</div>
										<div className="info__date">July 15, 2019</div>
										<div className="info__author">Lvhau</div>
									</div> */}
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</Layout>
		</>
	);
}

export default React.memo(BlogDetail);
