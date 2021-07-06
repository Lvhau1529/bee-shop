import React, { useEffect, useMemo, useState } from "react"
import Layout from "../../layouts/index"
import Breadcrumb from "../../components/breadcrumb"
import ProductItem from "../../components/product"
import { Row, Col, Select, Pagination } from "antd"
import { FaThList } from "react-icons/fa"
import { FaThLarge } from "react-icons/fa"

import { getProducts, countProducts, addToCart } from "../../../../services/firebaseService"

const { Option } = Select
const limit = 10
function Products() {
	const [total, setTotal] = useState(0)
	const [products, setProducts] = useState([])
	const [page, setPage] = useState(1)

	const [sort, setSort] = useState({
		sortBy: "name",
		sortOrder: "asc"
	})

	const offset = useMemo(() => {
		return (page - 1) * limit
	}, [page])

	const get = async () => {
		const data = await getProducts(offset, sort.sortBy, sort.sortOrder)
		setProducts(data)
	}

	const count = async () => {
		const data = await countProducts()
		setTotal(data)
	}

	const add = productId => async () => {
		try {
			await addToCart(productId, 1)
			alert("added")
		} catch (err) {
			alert(err.response?.data || err.message)
		}
	}

	useEffect(() => {
		get()
	}, [sort, offset])

	useEffect(() => {
		count()
	}, [])

	const onChangeFilter = (value) => {
		switch (value) {
			case "lowToHigh":
				return setSort({ sortBy: "price", sortOrder: "asc" })
			case "hightoLow":
				return setSort({ sortBy: "price", sortOrder: "desc" })
			case "nameAtoZ":
				return setSort({ sortBy: "name", sortOrder: "desc" })
			case "nameZtoA":
				return setSort({ sortBy: "name", sortOrder: "desc" })
			default:
				return
		}
	}

	return (
		<>
			<Layout>
				<Breadcrumb
					title="Products"
					link1="/"
					link2="/product"
					name1="Home"
					name2="Product"
				/>
				<div className="product">
					<div className="container">
						<Row>
							<Col span={24}>
								<div className="product__sort">
									<div className="product__sort-view">
										<a href>
											<FaThList />
										</a>
										<a href>
											<FaThLarge />
										</a>
									</div>
									<Select
										defaultValue="Price, low to high"
										style={{ width: 200 }}
										onChange={onChangeFilter}
									>
										<Option value="lowToHigh">Price, low to high</Option>
										<Option value="hightoLow">Price, high to low</Option>
										<Option value="nameAtoZ">name, A-Z</Option>
										<Option value="nameZtoA">name, Z-A</Option>
									</Select>
								</div>
							</Col>
						</Row>
						<div className="product__items">
							<Row>
								{products.map(product => <Col span={6} key={product.id}>
									<ProductItem
										img={product.img}
										name={product.name}
										price={`$${product.price}`}
										sale={`$${product.sale}`}
										add={add(product.id)}
									/>
								</Col>)}
							</Row>
						</div>
						<div className="product__pagination">
							<Row>
								<Col span={24}>
									<Pagination current={page} pageSize={limit} total={total} onChange={(page, pageSize) => setPage(page)} />
								</Col>
							</Row>
						</div>
					</div>
				</div>
			</Layout>
		</>
	)
}

export default React.memo(Products)
