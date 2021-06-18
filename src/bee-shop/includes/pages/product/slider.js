import React, { Component } from "react";
import Slider from "react-slick";
import img from "../../../assets/images/4_507f6fba-f388-4083-9fb4-e2da9dfda4ee_425x.webp";
import img1 from "../../../assets/images/4_2da966d0-5f84-4f25-b7ed-bcc6189053a4_155x.jpg";

export default class AsNavFor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nav1: null,
			nav2: null,
		};
	}

	componentDidMount() {
		this.setState({
			nav1: this.slider1,
			nav2: this.slider2,
		});
	}

	render() {
    const myStyle = {
      width: "155px",
      height: "155px",
    };
		return (
			<div>
				<Slider
					asNavFor={this.state.nav2}
					ref={(slider) => (this.slider1 = slider)}
				>
					<div>
						<img src={img} alt="" />
					</div>
					<div>
						<img src={img} alt="" />
					</div>
					<div>
						<img src={img} alt="" />
					</div>
				</Slider>
				<Slider
					asNavFor={this.state.nav1}
					ref={(slider) => (this.slider2 = slider)}
					slidesToShow={3}
					swipeToSlide={true}
					focusOnSelect={true}
				>
					<div>
						<img style={myStyle} src={img} alt="" />
					</div>
					<div>
						<img style={myStyle} src={img} alt="" />
					</div>
					<div>
						<img style={myStyle} src={img1} alt="" />
					</div>
				</Slider>
			</div>
		);
	}
}
