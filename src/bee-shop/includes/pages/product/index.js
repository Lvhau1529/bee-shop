import React, { useEffect, useContext, useRef } from "react";
import Layout from "../../layouts/index";
import Breadcrumb from "../../components/breadcrumb";
import ProductItem from "../../components/product";
import { Row, Col, Select, Pagination, Input } from "antd";
// import { FaTags, FaThList } from "react-icons/fa";
// import { FaThLarge } from "react-icons/fa";
import { ProductContext } from "../../../../contexts/ProductContext";
import useUserAuth from "../../../../hooks/useUserAuth";
const { Option } = Select;
function Products() {
	const timeout = useRef(null);
	const productContext = useContext(ProductContext);
	const {
		search,
		tag,
		allTags,
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
		setSort,
		setTag,
		getAllTags,
		setSearch,
	} = productContext;

	useUserAuth(get, null);

	useEffect(() => {
		get();
	}, [sort, offset]);

	useEffect(() => {
		get(true);
	}, [tag]);

	useEffect(() => {
		if (timeout.current) {
			clearTimeout(timeout.current);
			timeout.current = null;
		}
		timeout.current = setTimeout(() => get(true), 500);
	}, [search]);

	useEffect(() => {
		count();
		getAllTags();
	}, []);

	const onChangeFilter = (value) => {
		switch (value) {
			case "lowToHigh":
				return setSort({ sortBy: "price", sortOrder: "asc" });
			case "hightoLow":
				return setSort({ sortBy: "price", sortOrder: "desc" });
			case "nameAtoZ":
				return setSort({ sortBy: "name", sortOrder: "asc" });
			case "nameZtoA":
				return setSort({ sortBy: "name", sortOrder: "desc" });
			default:
				return;
		}
	};

	return (
		<>
			<Layout>
				<Breadcrumb
					title="Cửa hàng"
					link1="/"
					link2="/product"
					name1="Trang chủ"
					name2="Cửa hàng"
				/>
				<div className="product">
					<div className="container">
						<Row>
							<Col span={24}>
								<div className="product__sort">
									{/* <div className="product__sort-view">
										<a href>
											<FaThList />
										</a>
										<a href>
											<FaThLarge />
										</a>
									</div> */}
									<div>
										<Input style={{ borderRadius: "0", padding: "1rem"}}
											value={search}
											placeholder="Tìm kiếm sản phẩm"
											onChange={(e) => setSearch(e.target.value)}
										/>
									</div>
									<div>
										<Select
											value={tag}
											style={{ width: "200px" }}
											onChange={(value) => setTag(value)}
											placeholder="Lọc theo nhãn"
											allowClear
										>
											{allTags.map((item) => (
												<Option key={item} value={item}>
													{item}
												</Option>
											))}
										</Select>
										<Select
											defaultValue="Sắp xếp sản phẩm"
											style={{ width: 200 }}
											onChange={onChangeFilter}
										>
											<Option value="lowToHigh">Giá, thấp đến cao</Option>
											<Option value="hightoLow">Giá, cao xuống thấp</Option>
											<Option value="nameAtoZ">Tên, A-Z</Option>
											<Option value="nameZtoA">Tên, Z-A</Option>
										</Select>
									</div>
								</div>
							</Col>
						</Row>
						<div className="product__items">
							<Row>
								{products.map((product) => (
									<Col span={6} key={product.id}>
										<ProductItem
											id={product.id}
											img={product.img}
											name={product.name}
											price={`$${product.price}`}
											sale={product.sale === 0 ? "" : `$${product.sale}`}
											add={add(product.id, 1)}
											percent={
												product.sale === 0
													? ""
													: `-${Math.trunc(
															(parseInt(product.price) /
																parseInt(product.sale)) *
																100
													  )}%`
											}
										/>
									</Col>
								))}
							</Row>
						</div>
						<div className="product__pagination">
							<Row>
								<Col span={24}>
									<Pagination
										current={page}
										pageSize={limit}
										total={total}
										onChange={(page, pageSize) => setPage(page)}
									/>
								</Col>
							</Row>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
}

export default React.memo(Products);
