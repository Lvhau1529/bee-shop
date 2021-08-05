import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import Breadcrumb from "../../components/breadcrumb";
import img from "../../../assets/images/1_570x.png";
import img2 from "../../../assets/images/2_570x.png";
import img3 from "../../../assets/images/800x800.jpg";
// import Detail from "./detail"

function Blog() {
	const description =
		"Mật ong là chất ngọt không lên men, do ong lấy mật hoa hoặc dịch tiết từ bộ phận sống khác trên cây chế tạo ra, sau khi kiếm về chế biến và trộn với những chất liệu đặc biệt rồi bảo quản (đã đạt độ chín) trong bánh tổ mậtMật ong không được có bất kỳ hương vị hoặc mùi khó chịu nào được hấp thụ và chất lạ trong quá trình chế biến và bảo quản, cũng như không chứa những chất độc thực vật tự nhiên với hàm lượng có";

	const description2 =
		"Sữa ong chúa là chất sệt, dính màu trắng hoặc vàng nhạt, có vị hơi chua do tuyến họng của các ong thợ non (từ 5-14 ngày tuổi) tiết ra để nuôi ấu trùng ong chúa và ong chúa. Đúng ra phải gọi là “sữa nuôi ong chúa” mới chính xác, song gọi như vậy khá dài nên người ta thường gọi là “sữa ong chúa” hoặc “sữa chúa”. Con ong chúa và ong thợ đều được nở ra từ trứng thụ tinh nghĩa là có bộ gen hoàn toàn giống nhau nhưng do được cung cấp chế độ dinh dưỡng khác nhau mà phát triển thành các cá thể có cấu tạo cơ thể và chức năng sinh lý hoàn toàn khác nhau.";

	const shortenDescription = (description) => {
		try {
			if (description.length < 200) return description;
			return `${description.slice(0, 200)}...`;
		} catch {
			return "";
		}
	};

	return (
		<>
			<Breadcrumb
				title="Tin tức"
				link1="/"
				link2="/news"
				name1="Trang chủ"
				name2="Tin tức"
			/>
			<div className="container">
				<div className="blog-layout">
					<div className="blog__grid">
						<Row>
							<Col span={8}>
								<div className="blog__grid-card">
									<div className="card__img">
										<Link to="/news/detail">
											<img src={img} alt="" />
										</Link>
									</div>
									<div className="card__title">
										<Link to="#">
											<h3>Những điều có thể bạn chưa biết về mật ong</h3>
										</Link>
									</div>
									<div className="card__content">
										<p>{shortenDescription(description)}</p>
									</div>
									<div className="card__btn">
										<Link to="/news/detail">Đọc thêm</Link>
									</div>
								</div>
							</Col>

							<Col span={8}>
								<div className="blog__grid-card">
									<div className="card__img">
										<Link to="/news/detail">
											<img src={img2} alt="" />
										</Link>
									</div>
									<div className="card__title">
										<h3>Công dụng tuyệt vời của sữa ong chúa</h3>
									</div>
									<div className="card__content">
										<p>{shortenDescription(description2)}</p>
									</div>
									<div className="card__btn">
										<Link to="/news/detail">Đọc thêm</Link>
									</div>
								</div>
							</Col>

							<Col span={8}>
								<div className="blog__grid-card">
									<div className="card__img">
										<Link to="/news/detail">
											<img
												src={img3}
												alt=""
											/>
										</Link>
									</div>
									<div className="card__title">
										<h3>Làm đẹp với mật ong có thể bạn chưa biết</h3>
									</div>
									<div className="card__content">
										<p>
											Từ lâu, mật ong vẫn được xem là loại "vàng lỏng" và được
											áp dụng trong việc điều trị, chăm sóc sức khỏe và sắc
											đẹp...
										</p>
									</div>
									<div className="card__btn">
										<Link to="/news/detail">Đọc thêm</Link>
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

export default React.memo(Blog);
