import React, { useEffect, useContext } from "react";
import Dashboard from "../Dashboard/Dashboard";
import { Table, Popconfirm } from "antd";
import { ProductContext } from "../../contexts/ProductContext";
import useUserAuth from "../../hooks/useUserAuth";

function RemoveProduct() {
	const productContext = useContext(ProductContext);
	const { products, offset, sort, get, removeProduct } = productContext;

	useUserAuth(get, null);

	useEffect(() => {
		get();
	}, [sort, offset]);

	const nameProduct = products.map((product) => product.name);

	console.log(nameProduct);

	const columns = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
			onFilter: (value, record) => record.name.indexOf(value) === 0,
			sorter: (a, b) => a.name.length - b.name.length,
			sortDirections: ["ascend"],
		},
		{
			title: "Id",
			dataIndex: "id",
			key: "id",
		},
		{
			title: "Sale",
			dataIndex: "sale",
			key: "sale",
			// defaultSortOrder: "descend",
			sorter: (a, b) => a.sale - b.sale,
		},
		{
			title: "Price",
			dataIndex: "price",
			key: "price",
			defaultSortOrder: "descend",
			sorter: (a, b) => a.price - b.price,
		},
		{ title: "Image", dataIndex: "image", key: "image" },
		{
			title: "Action",
			dataIndex: "action",
			key: "x",
			render: () => (
				<Popconfirm
					title="Sure to delete?"
					onConfirm={() => {
						removeProduct("Trang");
					}}
				>
					<a href>Delete</a>
				</Popconfirm>
			),
		},
	];

	const dataTable = products.map((product) => ({
		key: product.id,
		id: product.id,
		name: product.name,
		sale: product.sale,
		price: product.price,
		image: product.img,
		description: product.description,
	}));

	return (
		<>
			<Dashboard>
				<Table
					columns={columns}
					expandable={{
						expandedRowRender: (record) => (
							<p style={{ margin: 0 }}>{record.description}</p>
						),
						rowExpandable: (record) => record.name !== "Not Expandable",
					}}
					dataSource={dataTable}
				/>
			</Dashboard>
		</>
	);
}

export default React.memo(RemoveProduct);
