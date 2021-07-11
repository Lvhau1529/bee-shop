import React, { useEffect, useContext } from "react"
import Layout from "../../layouts/index"
import Breadcrumb from "../../components/breadcrumb"
import ProductItem from "../../components/product"
import { Row, Col, Select, Pagination } from "antd"
import { FaThList } from "react-icons/fa"
import { FaThLarge } from "react-icons/fa"
import { ProductContext } from "../../../../contexts/ProductContext"
import useUserAuth from "../../../../hooks/useUserAuth"
const { Option } = Select
function Products() {
	const productContext = useContext(ProductContext)
	const {
		total,
		limit,
		products,
		offset,
		page,
		sort,
		setPage,
		get,
		count,
		add,
		setSort
	} = productContext

	useUserAuth(get, null)

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
				return setSort({ sortBy: "name", sortOrder: "asc" })
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
										id={product.id}
										img={product.img}
										name={product.name}
										price={`$${product.price}`}
										sale={`$${product.sale}`}
										add={add(product.id, 1)}
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
