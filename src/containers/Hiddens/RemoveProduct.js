import React, { useEffect, useContext, useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import { Table, Input, Button, Space, Popconfirm } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { ProductContext } from "../../contexts/ProductContext";
import useUserAuth from "../../hooks/useUserAuth";
import { removeProduct } from "../../services/firebaseService";

function RemoveProduct() {
	const productContext = useContext(ProductContext);
	const { products, offset, sort, get } = productContext;

	const [searchText, setSearchText] = useState("");
	const [searchedColumn, setSearchedColumn] = useState("");

	useUserAuth(get, null);

	useEffect(() => {
		get();
	}, [sort, offset, get]);

	const getColumnSearchProps = (dataIndex) => ({
		filterDropdown: ({
			setSelectedKeys,
			selectedKeys,
			confirm,
			clearFilters,
		}) => (
			<div style={{ padding: 8 }}>
				<Input
					// ref={(node) => {
					// 	const searchInput = node;
					// }}
					placeholder={`Search ${dataIndex}`}
					value={selectedKeys[0]}
					onChange={(e) =>
						setSelectedKeys(e.target.value ? [e.target.value] : [])
					}
					onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
					style={{
						padding: "0.5rem",
						borderRadius: "0",
						marginBottom: "0.8rem",
						display: "block",
            fontSize: "1.4rem"
					}}
				/>
				<Space>
					<Button
						type="primary"
						onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
						icon={<SearchOutlined />}
						size="small"
						style={{ width: 90 }}
					>
						Search
					</Button>
					<Button
						onClick={() => handleReset(clearFilters)}
						size="small"
						style={{ width: 90 }}
					>
						Reset
					</Button>
					{/* <Button
						type="link"
						size="small"
						onClick={() => {
							confirm({ closeDropdown: false });
							setSearchText(selectedKeys[0]);
							setSearchedColumn(dataIndex);
						}}
					>
						Filter
					</Button> */}
				</Space>
			</div>
		),
		filterIcon: (filtered) => (
			<SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
		),
		onFilter: (value, record) =>
			record[dataIndex]
				? record[dataIndex]
						.toString()
						.toLowerCase()
						.includes(value.toLowerCase())
				: "",
		// onFilterDropdownVisibleChange: (visible) => {
		// 	if (visible) {
		// 		setTimeout(() => searchInput.select(), 100);
		// 	}
		// },
		render: (text) =>
			searchedColumn === dataIndex ? (
				<Highlighter
					highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
					searchWords={[searchText]}
					autoEscape
					textToHighlight={text ? text.toString() : ""}
				/>
			) : (
				text
			),
	});

	const handleSearch = (selectedKeys, confirm, dataIndex) => {
		confirm();
		setSearchText(selectedKeys[0]);
		setSearchedColumn(dataIndex);
	};

	const handleReset = (clearFilters) => {
		clearFilters();
		setSearchText(" ");
	};

	// Table info
	const columns = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
			...getColumnSearchProps("name"),
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
			// defaultSortOrder: "descend",
			sorter: (a, b) => a.price - b.price,
		},
		{ title: "Image", dataIndex: "image", key: "image" },
		{
			title: "Action",
			dataIndex: "action",
			key: "x",
			render: (_, record) => (
				<Popconfirm
					title="Sure to delete?"
					onConfirm={() => {
						removeProduct(record.name);
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
					// pagination={{position: "none"}}
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
