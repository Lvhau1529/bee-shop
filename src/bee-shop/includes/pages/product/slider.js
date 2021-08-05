import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import Slider from "react-slick";
import img from "../../../assets/images/4_507f6fba-f388-4083-9fb4-e2da9dfda4ee_425x.webp";
// import img1 from "../../../assets/images/5_2da966d0-5f84-4f25-b7ed-bcc6189053a4_155x.jpg";
import img1 from "../../../assets/images/5_600x.jpg";

import { getProductById } from "../../../../services/firebaseService";

function AsNavFor() {
	const [data, setData] = useState({});
	const { id } = useParams();

	const getData = async () => {
		const product = await getProductById(id);
		setData(product);
	};

	useEffect(() => {
		getData();
	}, [id]);
	const [nav1, setNav1] = useState(null);
	const [nav2, setNav2] = useState(null);
	const myStyle = {
		width: "155px",
		height: "155px",
	};

	return (
		<>
			<div>
				<Slider asNavFor={nav2} ref={(slider) => setNav1(slider)}>
					<div>
						<img src={data.img} alt="" />
					</div>
					<div>
						<img src={img} alt="" />
					</div>
					<div>
						<img src={img1} alt="" />
					</div>
				</Slider>

				<Slider
					asNavFor={nav1}
					ref={(slider) => setNav2(slider)}
					slidesToShow={3}
					swipeToSlide={true}
					focusOnSelect={true}
				>
					<div>
						<img style={myStyle} src={data.img} alt="" />
					</div>
					<div>
						<img style={myStyle} src={img} alt="" />
					</div>
					<div>
						<img style={myStyle} src={img1} alt="" />
					</div>
				</Slider>
			</div>
		</>
	);
}

export default React.memo(AsNavFor);
