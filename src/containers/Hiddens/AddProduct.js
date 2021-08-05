import React, { useState } from "react";
import { Row, Col } from "antd";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { addProduct, addTags } from "../../services/firebaseService";
import "./AddProduct.scss";
import Dashboard from "../Dashboard/Dashboard";
import "./AddProduct.scss";

const products = [
	{
		name: "Proin nulla dui",
		price: 140,
		sale: 280,
		img: "https://firebasestorage.googleapis.com/v0/b/test-df518.appspot.com/o/1_ef8f0db1-9878-4d5c-9421-984054e785a5_600x.jpg?alt=media&token=8554785c-6280-4c7f-bc08-a33ed3c8a3d2",
		description:
			"<p>Thành phần: 100% Mật ong nguyên chất</p><p>Cách dùng:<br>-&nbsp;Uống trực tiếp hoặc dùng để chế biến món ăn, đồ uống.<br>- Mật ong BleBee là gia vị không thể thiếu trong việc chế biến thực phẩm như: Nướng gà, Kho thịt, Quay vịt, nướng thịt cá, chế biến bánh kẹo, đồ uống như: Nước cam, nước chanh, sinh tố, sữa chua.<br>- Bảo quản:&nbsp;Bảo quản nơi khô ráo thoáng mát, tránh ánh nắng mặt trời,&nbsp;không cần để trong tủ lạnh.</p><p>Ghi chú:<br>-&nbsp;Mật ong có thể bị đóng băng hay kết tinh do lạnh. Để trở về trạng thái ban đầu, ngâm vào nước nóng trong 20 - 30 phút rồi lắc đều.<br>- Thực phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh.</p>",
		tags: "tag1,tag2",
	},
	{
		name: "Pellentesque lacinia",
		price: 150,
		sale: 300,
		img: "https://firebasestorage.googleapis.com/v0/b/test-df518.appspot.com/o/2_bede556b-ba58-485a-a85d-8756d110b5df_900x900.jpg?alt=media&token=8832722e-aa0f-49f9-a3bb-ac57f3eb5f50",
		description:
			"<p>Thành phần: 100% Mật ong nguyên chất</p><p>Cách dùng:<br>-&nbsp;Uống trực tiếp hoặc dùng để chế biến món ăn, đồ uống.<br>- Mật ong BleBee là gia vị không thể thiếu trong việc chế biến thực phẩm như: Nướng gà, Kho thịt, Quay vịt, nướng thịt cá, chế biến bánh kẹo, đồ uống như: Nước cam, nước chanh, sinh tố, sữa chua.<br>- Bảo quản:&nbsp;Bảo quản nơi khô ráo thoáng mát, tránh ánh nắng mặt trời,&nbsp;không cần để trong tủ lạnh.</p><p>Ghi chú:<br>-&nbsp;Mật ong có thể bị đóng băng hay kết tinh do lạnh. Để trở về trạng thái ban đầu, ngâm vào nước nóng trong 20 - 30 phút rồi lắc đều.<br>- Thực phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh.</p>",
		tags: "tag1,tag3",
	},
	{
		name: "Orara Valiley Honey",
		price: 110,
		sale: 220,
		img: "https://firebasestorage.googleapis.com/v0/b/test-df518.appspot.com/o/3_ec7e2813-6fbc-40ce-a776-c9da15ec9022_425x.jpg?alt=media&token=f77d0275-06ab-4aac-9943-2a20bba349a3",
		description:
			"<p>Thành phần: 100% Mật ong nguyên chất</p><p>Cách dùng:<br>-&nbsp;Uống trực tiếp hoặc dùng để chế biến món ăn, đồ uống.<br>- Mật ong BleBee là gia vị không thể thiếu trong việc chế biến thực phẩm như: Nướng gà, Kho thịt, Quay vịt, nướng thịt cá, chế biến bánh kẹo, đồ uống như: Nước cam, nước chanh, sinh tố, sữa chua.<br>- Bảo quản:&nbsp;Bảo quản nơi khô ráo thoáng mát, tránh ánh nắng mặt trời,&nbsp;không cần để trong tủ lạnh.</p><p>Ghi chú:<br>-&nbsp;Mật ong có thể bị đóng băng hay kết tinh do lạnh. Để trở về trạng thái ban đầu, ngâm vào nước nóng trong 20 - 30 phút rồi lắc đều.<br>- Thực phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh.</p>",
		tags: "tag2,tag4",
	},
	{
		name: "Aenean commodo",
		price: 120,
		sale: 124,
		img: "https://firebasestorage.googleapis.com/v0/b/test-df518.appspot.com/o/4_507f6fba-f388-4083-9fb4-e2da9dfda4ee_425x.webp?alt=media&token=42f6bf39-ddb3-4f16-b5dd-ba093eded36e",
		description:
			"<p>Thành phần: 100% Mật ong nguyên chất</p><p>Cách dùng:<br>-&nbsp;Uống trực tiếp hoặc dùng để chế biến món ăn, đồ uống.<br>- Mật ong BleBee là gia vị không thể thiếu trong việc chế biến thực phẩm như: Nướng gà, Kho thịt, Quay vịt, nướng thịt cá, chế biến bánh kẹo, đồ uống như: Nước cam, nước chanh, sinh tố, sữa chua.<br>- Bảo quản:&nbsp;Bảo quản nơi khô ráo thoáng mát, tránh ánh nắng mặt trời,&nbsp;không cần để trong tủ lạnh.</p><p>Ghi chú:<br>-&nbsp;Mật ong có thể bị đóng băng hay kết tinh do lạnh. Để trở về trạng thái ban đầu, ngâm vào nước nóng trong 20 - 30 phút rồi lắc đều.<br>- Thực phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh.</p>",
		tags: "tag2,tag5",
	},
	{
		name: "Nulla consequat ma",
		price: 65,
		sale: 120,
		img: "https://firebasestorage.googleapis.com/v0/b/test-df518.appspot.com/o/11_600x.jpg?alt=media&token=6601a271-9146-490e-abd0-6f2e58eeace4",
		description:
			"<p>Thành phần: 100% Mật ong nguyên chất</p><p>Cách dùng:<br>-&nbsp;Uống trực tiếp hoặc dùng để chế biến món ăn, đồ uống.<br>- Mật ong BleBee là gia vị không thể thiếu trong việc chế biến thực phẩm như: Nướng gà, Kho thịt, Quay vịt, nướng thịt cá, chế biến bánh kẹo, đồ uống như: Nước cam, nước chanh, sinh tố, sữa chua.<br>- Bảo quản:&nbsp;Bảo quản nơi khô ráo thoáng mát, tránh ánh nắng mặt trời,&nbsp;không cần để trong tủ lạnh.</p><p>Ghi chú:<br>-&nbsp;Mật ong có thể bị đóng băng hay kết tinh do lạnh. Để trở về trạng thái ban đầu, ngâm vào nước nóng trong 20 - 30 phút rồi lắc đều.<br>- Thực phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh.</p>",
		tags: "tag1,tag5",
	},
	{
		name: "Morbi viverra hend",
		price: 19,
		sale: 88,
		img: "https://firebasestorage.googleapis.com/v0/b/test-df518.appspot.com/o/12_600x.jpg?alt=media&token=64acd3e6-b253-45bc-8924-5aa355717589",
		description:
			"<p>Thành phần: 100% Mật ong nguyên chất</p><p>Cách dùng:<br>-&nbsp;Uống trực tiếp hoặc dùng để chế biến món ăn, đồ uống.<br>- Mật ong BleBee là gia vị không thể thiếu trong việc chế biến thực phẩm như: Nướng gà, Kho thịt, Quay vịt, nướng thịt cá, chế biến bánh kẹo, đồ uống như: Nước cam, nước chanh, sinh tố, sữa chua.<br>- Bảo quản:&nbsp;Bảo quản nơi khô ráo thoáng mát, tránh ánh nắng mặt trời,&nbsp;không cần để trong tủ lạnh.</p><p>Ghi chú:<br>-&nbsp;Mật ong có thể bị đóng băng hay kết tinh do lạnh. Để trở về trạng thái ban đầu, ngâm vào nước nóng trong 20 - 30 phút rồi lắc đều.<br>- Thực phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh.</p>",
		tags: "tag3,tag6",
	},
	{
		name: "Magnis dis parturient",
		price: 17,
		sale: 0,
		img: "https://firebasestorage.googleapis.com/v0/b/test-df518.appspot.com/o/5_600x.jpg?alt=media&token=96cf3483-c2b6-4b0c-a6e4-02399e977abd",
		description:
			"<p>Thành phần: 100% Mật ong nguyên chất</p><p>Cách dùng:<br>-&nbsp;Uống trực tiếp hoặc dùng để chế biến món ăn, đồ uống.<br>- Mật ong BleBee là gia vị không thể thiếu trong việc chế biến thực phẩm như: Nướng gà, Kho thịt, Quay vịt, nướng thịt cá, chế biến bánh kẹo, đồ uống như: Nước cam, nước chanh, sinh tố, sữa chua.<br>- Bảo quản:&nbsp;Bảo quản nơi khô ráo thoáng mát, tránh ánh nắng mặt trời,&nbsp;không cần để trong tủ lạnh.</p><p>Ghi chú:<br>-&nbsp;Mật ong có thể bị đóng băng hay kết tinh do lạnh. Để trở về trạng thái ban đầu, ngâm vào nước nóng trong 20 - 30 phút rồi lắc đều.<br>- Thực phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh.</p>",
		tags: "tag3,tag6",
	},
	{
		name: "Donec quam felis",
		price: 150,
		sale: 200,
		img: "https://firebasestorage.googleapis.com/v0/b/test-df518.appspot.com/o/6_c18dfaa8-37e0-44ad-bc5b-31f0c5b06c41_600x.jpg?alt=media&token=ab26e714-d826-4f39-9eaa-dc687cc6397d",
		description:
			"<p>Thành phần: 100% Mật ong nguyên chất</p><p>Cách dùng:<br>-&nbsp;Uống trực tiếp hoặc dùng để chế biến món ăn, đồ uống.<br>- Mật ong BleBee là gia vị không thể thiếu trong việc chế biến thực phẩm như: Nướng gà, Kho thịt, Quay vịt, nướng thịt cá, chế biến bánh kẹo, đồ uống như: Nước cam, nước chanh, sinh tố, sữa chua.<br>- Bảo quản:&nbsp;Bảo quản nơi khô ráo thoáng mát, tránh ánh nắng mặt trời,&nbsp;không cần để trong tủ lạnh.</p><p>Ghi chú:<br>-&nbsp;Mật ong có thể bị đóng băng hay kết tinh do lạnh. Để trở về trạng thái ban đầu, ngâm vào nước nóng trong 20 - 30 phút rồi lắc đều.<br>- Thực phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh.</p>",
		tags: "tag3,tag6",
	},
	{
		name: "Cum sociis natoque",
		price: 170,
		sale: 480,
		img: "https://firebasestorage.googleapis.com/v0/b/test-df518.appspot.com/o/7_f96edd11-989e-46e3-9f2e-c0bc8480df7e_600x.jpg?alt=media&token=9a299733-b6f0-489f-974d-475e878f3fdf",
		description:
			"<p>Thành phần: 100% Mật ong nguyên chất</p><p>Cách dùng:<br>-&nbsp;Uống trực tiếp hoặc dùng để chế biến món ăn, đồ uống.<br>- Mật ong BleBee là gia vị không thể thiếu trong việc chế biến thực phẩm như: Nướng gà, Kho thịt, Quay vịt, nướng thịt cá, chế biến bánh kẹo, đồ uống như: Nước cam, nước chanh, sinh tố, sữa chua.<br>- Bảo quản:&nbsp;Bảo quản nơi khô ráo thoáng mát, tránh ánh nắng mặt trời,&nbsp;không cần để trong tủ lạnh.</p><p>Ghi chú:<br>-&nbsp;Mật ong có thể bị đóng băng hay kết tinh do lạnh. Để trở về trạng thái ban đầu, ngâm vào nước nóng trong 20 - 30 phút rồi lắc đều.<br>- Thực phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh.</p>",
		tags: "tag2,tag4",
	},
	{
		name: "Cras fringilla et",
		price: 220,
		sale: 0,
		img: "https://firebasestorage.googleapis.com/v0/b/test-df518.appspot.com/o/8_669ffe79-f0f9-451b-a870-684415525cb5_600x.jpg?alt=media&token=eb79447b-d463-4fcc-9ccf-2a85af174df6",
		description:
			"<p>Thành phần: 100% Mật ong nguyên chất</p><p>Cách dùng:<br>-&nbsp;Uống trực tiếp hoặc dùng để chế biến món ăn, đồ uống.<br>- Mật ong BleBee là gia vị không thể thiếu trong việc chế biến thực phẩm như: Nướng gà, Kho thịt, Quay vịt, nướng thịt cá, chế biến bánh kẹo, đồ uống như: Nước cam, nước chanh, sinh tố, sữa chua.<br>- Bảo quản:&nbsp;Bảo quản nơi khô ráo thoáng mát, tránh ánh nắng mặt trời,&nbsp;không cần để trong tủ lạnh.</p><p>Ghi chú:<br>-&nbsp;Mật ong có thể bị đóng băng hay kết tinh do lạnh. Để trở về trạng thái ban đầu, ngâm vào nước nóng trong 20 - 30 phút rồi lắc đều.<br>- Thực phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh.</p>",
		tags: "tag3,tag6",
	},
	{
		name: "Consectetuer adipiscing",
		price: 210,
		sale: 0,
		img: "https://firebasestorage.googleapis.com/v0/b/test-df518.appspot.com/o/9_e1d315f2-9c92-4d8e-92d5-817b7bebbc2e_600x.jpg?alt=media&token=53c6dca2-3e47-477d-bb47-8df2520913a2",
		description:
			"<p>Thành phần: 100% Mật ong nguyên chất</p><p>Cách dùng:<br>-&nbsp;Uống trực tiếp hoặc dùng để chế biến món ăn, đồ uống.<br>- Mật ong BleBee là gia vị không thể thiếu trong việc chế biến thực phẩm như: Nướng gà, Kho thịt, Quay vịt, nướng thịt cá, chế biến bánh kẹo, đồ uống như: Nước cam, nước chanh, sinh tố, sữa chua.<br>- Bảo quản:&nbsp;Bảo quản nơi khô ráo thoáng mát, tránh ánh nắng mặt trời,&nbsp;không cần để trong tủ lạnh.</p><p>Ghi chú:<br>-&nbsp;Mật ong có thể bị đóng băng hay kết tinh do lạnh. Để trở về trạng thái ban đầu, ngâm vào nước nóng trong 20 - 30 phút rồi lắc đều.<br>- Thực phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh.</p>",
		tags: "tag1,tag5",
	},
];

const initData = {
	name: "",
	price: 0,
	sale: 0,
	img: "",
	description: "",
	tags: "",
};

const AddProduct = () => {
	const [data, setData] = useState({ ...initData });

	const changeData = (valueObj) => {
		setData({
			...data,
			...valueObj,
		});
	};

	const add = async (product) => {
		try {
			const { name, price, img, description, tags } = product;
			if ([name, price, img, description].some((value) => !value))
				throw new Error("Dữ liệu không hợp lệ");
			const productTags = tags.split(",").map((tag) => tag.trim());
			if (tags && tags.trim()) {
				await addTags(productTags);
			}
			await addProduct({
				...product,
				tags: `,${productTags.join(",")},`,
			});
			alert("Thêm sản phẩm thành công");
		} catch (err) {
			console.error(err.response?.data || err.message);
		}
	};

	const addSampleProducts = async () => {
		for (const product of products) {
			await add(product);
		}
		alert("Đã thêm toàn bộ sản phẩm");
	};

	return (
		<>
			<Dashboard>
				<div>
					<h2 style={{ textAlign: "center" }}>Thêm sản phẩm</h2>
					<div class="form-group">
						<label for="name" class="form-label">
							Tên sản phẩm
						</label>
						<input
							className="form-input"
							value={data.name}
							onChange={(e) => changeData({ name: e.target.value })}
							placeholder="Điền tên sản phẩm"
						/>
					</div>
					<Row className="d-flex justify-content-between">
						<Col span={11}>
							<div class="form-group">
								<label for="price" class="form-label">
									Giá bán
								</label>
								<input
									className="form-input"
									type="number"
									min={0}
									value={data.price}
									onChange={(e) =>
										changeData({ price: parseInt(e.target.value) })
									}
									placeholder="Điền giá bán"
								/>
							</div>

							<div class="form-group">
								<label for="price" class="form-label">
									Giá khuyến mãi
								</label>
								<input
									className="form-input"
									type="number"
									value={data.sale}
									onChange={(e) =>
										changeData({ sale: parseInt(e.target.value) })
									}
									placeholder="Điền giá khuyến mãi"
								/>
							</div>

							<div class="form-group">
								<label for="price" class="form-label">
									Thẻ
								</label>
								<input
									className="form-input"
									value={data.tags}
									onChange={(e) => changeData({ tags: e.target.value })}
									placeholder="Các thẻ, được phân chia bằng dấu phẩy"
								/>
							</div>
						</Col>
						<Col span={11}>
							<div class="form-group">
								<label for="price" class="form-label">
									URL ảnh
								</label>
								<input
									className="form-input"
									value={data.img}
									onChange={(e) => changeData({ img: e.target.value })}
									placeholder="Điền URL ảnh"
								/>
							</div>

							<div class="form-group">
								<label for="price" class="form-label">
									Mô tả sản phẩm
								</label>
								<CKEditor
									editor={ClassicEditor}
									onChange={(e, editor) => {
										const data = editor.getData();
										changeData({ description: data });
									}}
									value={data.description}
								></CKEditor>
							</div>
						</Col>
					</Row>

					<div className="d-flex justify-content-center">
						<button onClick={() => add(data)}>Thêm</button>
						<button onClick={addSampleProducts}>Thêm tất cả</button>
					</div>
				</div>
			</Dashboard>
		</>
	);
};

export default AddProduct;
