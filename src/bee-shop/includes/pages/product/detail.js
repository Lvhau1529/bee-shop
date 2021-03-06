import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import format from "date-fns/format";
import {
	Row,
	Col,
	Rate,
	InputNumber,
	Input,
	Button,
	Popconfirm,
	Tag,
} from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";
import Parse from "html-react-parser";
import Layout from "../../layouts/index";
import Breadcrumb from "../../components/breadcrumb";
import Slider from "./slider";
import { ProductContext } from "../../../../contexts/ProductContext";
import {
	getProductById,
	getComments,
	createComments,
	getRatings,
	createRatings,
	editRating,
} from "../../../../services/firebaseService";
import useUserAuth from "../../../../hooks/useUserAuth";

const DATE_FORMAT = "dd-MM-yyyy HH:mm";

function DeltailProduct() {
	const context = useContext(ProductContext);
	const { add } = context;
	const [data, setData] = useState({});
	const [comments, setComments] = useState([]);
	const [text, setText] = useState("");
	const [isDisabled, setIsDisabled] = useState(false);
	const [ratings, setRatings] = useState({});
	const { id } = useParams();
	const [count, setCount] = useState(1);
	const [isCommentMode, setIsCommentMode] = useState(false);

	const getData = async () => {
		try {
			const [product, comments, ratings] = await Promise.all([
				getProductById(id),
				getComments(id),
				getRatings(id),
			]);
			setData(product);
			setComments(comments);
			setRatings(ratings);
		} catch (err) {
			console.log(err.response?.data || err.message);
			alert(err.response?.data || err.message);
		}
	};

	useUserAuth(getData, null);

	const onChange = (value) => setCount(value);

	const onAdd = async () => {
		try {
			await add(id, count)();
			setCount(1);
		} catch (err) {
			alert(err.response?.data || err.message);
		}
	};

	const { numberOfRatings, average, yourRating } = ratings || {};

	const onEditRating = async (value) => {
		try {
			if (!yourRating) {
				await createRatings(id, value);
			} else {
				await editRating(yourRating.id, value);
			}

			const data = await getRatings(id);
			setRatings(data);
		} catch (err) {
			alert(err.response?.data || err.message);
		}
	};

	const onCreateComment = async () => {
		setIsDisabled(true);
		try {
			text.length > 0
				? await createComments(id, text)
				: alert("Ch??a c?? b??nh lu???n");
			const data = await getComments(id);
			setText("");
			setComments(data);
		} catch (err) {
			alert(err.response?.data || err.message);
		}
		setIsDisabled(false);
	};

	// utils
	const shortenDescription = (description) => {
		try {
			if (description.length < 200) return description;
			return `${description.slice(0, 200)}...`;
		} catch {
			return "";
		}
	};

	const checkString = (description) => {
		try {
			if (description.length !== 0) return description;
			return "";
		} catch {
			return "";
		}
	};

	return (
		<>
			<Layout>
				<Breadcrumb
					title="Chi ti???t s???n ph???m"
					link1="/"
					link2="/detail"
					name1="Trang ch???"
					name2="Chi ti???t s???n ph???m"
				/>
				<div className="detail">
					<div className="container">
						<Row>
							<Col span={14}>
								<div className="detail__img">
									<Slider />
								</div>
							</Col>
							<Col span={10}>
								<div className="detail__product">
									<div className="detail__product-name">{data?.name}</div>
									<div className="detail__product-desc">
										{Parse(shortenDescription(data.description))}
									</div>
									<div className="d-flex justify-content-between align-items-center">
										<Tag color="blue">{data.tags}</Tag>
										<div className="status__available d-flex">
											<CheckCircleTwoTone twoToneColor="#52c41a" />
											<p style={{ marginLeft: "0.5rem", color: "#52c41a" }}>
												C??n h??ng
											</p>
										</div>
									</div>

									<div className="detail__product-status d-flex justify-content-between align-items-center">
										<div className="status__rate">
											<div className="d-flex justify-content-center">
												<Rate value={average} disabled />
												<p>
													<i style={{ marginLeft: "2rem" }}>
														L?????t ????nh gi?? ({numberOfRatings || 0})
													</i>
												</p>
											</div>
											<p style={{ marginTop: 16 }}>
												<i>????nh gi?? c???a b???n</i>
											</p>
											<Rate
												value={yourRating?.value || 0}
												min={1}
												onChange={(value) => onEditRating(value)}
											/>
										</div>
									</div>
									<div className="detail__product-price d-flex align-items-center">
										<div className="price__main">${data.price}</div>
										{data.sale === 0 ? (
											""
										) : (
											<div className="price__sale">${data.sale}</div>
										)}
									</div>
									<div className="detail__product-cart d-flex align-items-center">
										<InputNumber
											min={1}
											max={10}
											value={count}
											onChange={onChange}
										/>
										<div
											className="cart__button cursor-pointer"
											onClick={onAdd}
										>
											<span>Mua h??ng</span>
										</div>
									</div>
								</div>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<div className="detail__tab">
									<ul className="detail__tab-list d-flex">
										<li
											className="list__item cursor-pointer"
											onClick={() => setIsCommentMode(false)}
										>
											<span
												style={{ fontSize: !isCommentMode ? "1.2em" : "1em" }}
											>
												Mi??u t???
											</span>
										</li>
										<li
											className="list__item cursor-pointer"
											onClick={() => setIsCommentMode(true)}
										>
											<span
												style={{ fontSize: isCommentMode ? "1.2em" : "1em" }}
											>
												Nh???n x??t
											</span>
										</li>
									</ul>
									<div className="detail__tab-content">
										{isCommentMode ? (
											<>
												{!!comments.length ? (
													comments.map((comment) => (
														<div style={{ marginBottom: 16 }}>
															<p style={{ margin: 0 }}>
																<b>{comment.userEmail}</b>
															</p>
															<p style={{ margin: 0, fontSize: "0.8em" }}>
																<i>{`${format(
																	new Date(comment.time),
																	DATE_FORMAT
																)}`}</i>
															</p>
															<span>{comment.value}</span>
														</div>
													))
												) : (
													<p>Kh??ng c?? b??nh lu???n.</p>
												)}
												<div>
													<Input
														placeholder="Vi???t b??nh lu???n c???a b???n..."
														value={text}
														onChange={(e) => {
															setText(e.target.value);
														}}
														// onKeyUp={(e) =>
														// 	e.key === "Enter" && onCreateComment()
														// }
														disabled={isDisabled}
													/>
													<Popconfirm
														placement="topLeft"
														title="B??nh lu???n ???? g???i s??? kh??ng th??? ch???nh s???a. B???n ch???c ch???n mu???n g???i?"
														onConfirm={onCreateComment}
														okText="G???i"
														cancelText="Hu??? b???"
													>
														<Button type="primary" style={{ marginTop: 8 }}>
															B??nh lu???n
														</Button>
													</Popconfirm>
												</div>
											</>
										) : (
											<>{Parse(checkString(data.description))}</>
										)}
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

export default React.memo(DeltailProduct);
