import React, { useState, useEffect, useContext } from "react";
import Dashboard from "../Dashboard/Dashboard";
import { Table, Input, Button, Space, Popconfirm } from "antd";
import format from "date-fns/format";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { ProductContext } from "../../contexts/ProductContext";

const DATE_FORMAT = "dd/MM HH:mm";

const RemoveComment = () => {
	const productContext = useContext(ProductContext);
	const { comments, getComments, removeComment } = productContext;

	const [searchText, setSearchText] = useState("");
	const [searchedColumn, setSearchedColumn] = useState("");

	useEffect(() => {
		getComments();
	}, []);

  console.log(comments)

	const getColumnSearchProps = (dataIndex) => ({
		filterDropdown: ({
			setSelectedKeys,
			selectedKeys,
			confirm,
			clearFilters,
		}) => (
			<div style={{ padding: 8 }}>
				<Input
					placeholder={`Tìm kiếm bình luận`}
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
						fontSize: "1.4rem",
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
		// {
		// 	title: "Sản phẩm",
		// 	dataIndex: "name",
		// 	key: "name",
		// 	...getColumnSearchProps("name"),
		// },
    {
			title: "Khách hàng",
			dataIndex: "customer",
			key: "customer",
		},
		{
			title: "Id",
			dataIndex: "id",
			key: "id",
		},
		{
			title: "Bình luận",
			dataIndex: "comment",
			key: "comment",
		},
		{
			title: "Ngày",
			dataIndex: "date",
			key: "date",
		},
		{
			title: "",
			dataIndex: "action",
			key: "x",
			render: (_, record) => (
				<Popconfirm
					title="Bạn muốn xoá?"
					onConfirm={() => {
						removeComment(record.comment);
					}}
				>
					<a href>Xoá</a>
				</Popconfirm>
			),
		},
	];

	const dataTable = comments.map((comment) => ({
		key: comment.id,
    customer: comment.userEmail,
		id: comment.productId,
		name: comment.name,
		comment: comment.value,
		date: format(new Date(comment.time), DATE_FORMAT),
	}));

	return (
		<>
			<Dashboard>
				<Table
					columns={columns}
					dataSource={dataTable}
				/>
			</Dashboard>
		</>
	);
};

export default React.memo(RemoveComment);
