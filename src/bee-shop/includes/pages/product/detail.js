import React, { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import { Row, Col, Rate, InputNumber } from "antd"
import Layout from "../../layouts/index"
import Breadcrumb from "../../components/breadcrumb"
import Slider from "./slider"

import { ProductContext } from "../../../../contexts/ProductContext"
import { getProductById } from "../../../../services/firebaseService"

function DeltailProduct() {
	const context = useContext(ProductContext)
	const { add } = context
	const [data, setData] = useState({})
	const { id } = useParams()
	const [count, setCount] = useState(1)

	const getData = async () => {
		const product = await getProductById(id)
		setData(product)
	}

	const onChange = value => setCount(value)

	const onAdd = async () => {
		try {
			await add(id, count)()
			setCount(1)
		} catch (err) {
			alert(err.response?.data || err.message)
		}
	}

	useEffect(() => {
		getData()
	}, [id])

	// utils
	const shortenDescription = description => {
		try {
			if (description.length < 200) return description
			return `${description.slice(0, 200)}...`
		} catch {
			return ""
		}
	}

	return (
		<>
			<Layout>
				<Breadcrumb
					title="Chi tiết sản phẩm"
					link1="/"
					link2="/detail"
					name1="Trang chủ"
					name2="Chi tiết sản phẩm"
				/>
				<div className="detail">
					<div className="container">
						<Row>
							<Col span={14}>
								<div className="detail__img">
									<Slider />
									{/* <div className="detail__img-silde slider-nav"></div>
								<div className="detail__img-main slider-for"></div> */}
								</div>
							</Col>
							<Col span={10}>
								<div className="detail__product">
									<div className="detail__product-name">{data?.name}</div>
									<div className="detail__product-desc">
										{shortenDescription(data.description)}
									</div>
									<div className="detail__product-status d-flex justify-content-between align-items-center">
										<div className="status__rate">
											<Rate allowHalf defaultValue={5} />
										</div>
										<div className="status__available">Còn hàng</div>
									</div>
									<div className="detail__product-price d-flex align-items-center">
										<div className="price__main">${data.price}</div>
										{data.sale === 0 ? "" : <div className="price__sale">${data.sale}</div>}
										{console.log(data.sale)}
									</div>
									<div className="detail__product-cart d-flex align-items-center">
										<InputNumber
											min={1}
											max={10}
											value={count}
											onChange={onChange}
										/>
										<div className="cart__button cursor-pointer" onClick={onAdd}>
											<span>Mua hàng</span>
										</div>
									</div>
								</div>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<div className="detail__tab">
									<ul className="detail__tab-list d-flex">
										<li className="list__item">
											<a href>Miêu tả</a>
										</li>
										<li className="list__item">
											<a href>Nhận xét</a>
										</li>
									</ul>
									<div className="detail__tab-content">
										<p>
											{data.description}
										</p>
									</div>
								</div>
							</Col>
						</Row>
					</div>
				</div>
			</Layout>
		</>
	)
}

export default React.memo(DeltailProduct)
