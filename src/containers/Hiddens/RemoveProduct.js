import React, { useEffect, useContext, useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import { Table, Input, Button, Space, Popconfirm } from "antd";
import Highlighter from "react-highlight-words";
import Parse from "html-react-parser"
import { SearchOutlined } from "@ant-design/icons";
import { ProductContext } from "../../contexts/ProductContext";
import useUserAuth from "../../hooks/useUserAuth";

function RemoveProduct() {
	const productContext = useContext(ProductContext);
	const { products, get, removeProduct } = productContext;

	const [searchText, setSearchText] = useState("");
	const [searchedColumn, setSearchedColumn] = useState("");

	useUserAuth(get, null);

	useEffect(() => {
		get();
	}, []);

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
					placeholder={`Tìm kiếm sản phẩm`}
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
						// icon={<SearchOutlined />}
						size="small"
						style={{ width: 90 }}
					>
						Tìm kiếm
					</Button>
					<Button
						onClick={() => handleReset(clearFilters)}
						size="small"
						style={{ width: 90 }}
					>
						Đặt lại
					</Button>
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

  const checkString = (description) => {
    try {
      if (description.length !== 0) return description;
      return "";
    } catch {
      return "";
    }
  }

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
			title: "Tên sản phẩm",
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
			title: "Giá khuyến mãi",
			dataIndex: "sale",
			key: "sale",
			// defaultSortOrder: "descend",
			sorter: (a, b) => a.sale - b.sale,
		},
		{
			title: "Giá bán",
			dataIndex: "price",
			key: "price",
			// defaultSortOrder: "descend",
			sorter: (a, b) => a.price - b.price,
		},
		{ title: "URL ảnh", dataIndex: "image", key: "image", width: 100 },
		{
			title: "",
			dataIndex: "action",
			key: "x",
			render: (_, record) => (
				<Popconfirm
					title="Bạn muốn xoá?"
					onConfirm={() => {
						removeProduct(record.name);
					}}
				>
					<a href>Xoá</a>
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
							<p style={{ margin: 0 }}>{Parse(checkString(record.description))}</p>            
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
