import React, { useState } from "react"
import { Row, Col } from "antd"
import { addProduct, addTags } from "../../services/firebaseService"
import "./AddProduct.scss"
import Dashboard from "../Dashboard/Dashboard"
import "./AddProduct.scss"

const products = [
	{
		name: "Proin nulla dui",
		price: 140,
		sale: 280,
		img: "https://firebasestorage.googleapis.com/v0/b/test-df518.appspot.com/o/1_ef8f0db1-9878-4d5c-9421-984054e785a5_600x.jpg?alt=media&token=8554785c-6280-4c7f-bc08-a33ed3c8a3d2",
		description:
			"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque New producteu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
		tags: "tag1,tag2"
	},
	{
		name: "Pellentesque lacinia",
		price: 150,
		sale: 300,
		img: "https://firebasestorage.googleapis.com/v0/b/test-df518.appspot.com/o/2_bede556b-ba58-485a-a85d-8756d110b5df_900x900.jpg?alt=media&token=8832722e-aa0f-49f9-a3bb-ac57f3eb5f50",
		description:
			"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque New producteu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
		tags: "tag1,tag3"
	},
	{
		name: "Orara Valiley Honey",
		price: 110,
		sale: 220,
		img: "https://firebasestorage.googleapis.com/v0/b/test-df518.appspot.com/o/3_ec7e2813-6fbc-40ce-a776-c9da15ec9022_425x.jpg?alt=media&token=f77d0275-06ab-4aac-9943-2a20bba349a3",
		description:
			"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque New producteu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
		tags: "tag3,tag4"
	},
	{
		name: "Aenean commodo",
		price: 120,
		sale: 124,
		img: "https://firebasestorage.googleapis.com/v0/b/test-df518.appspot.com/o/4_507f6fba-f388-4083-9fb4-e2da9dfda4ee_425x.webp?alt=media&token=42f6bf39-ddb3-4f16-b5dd-ba093eded36e",
		description:
			"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque New producteu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
		tags: "tag2,tag3"
	},
	{
		name: "Nulla consequat ma",
		price: 65,
		sale: 120,
		img: "https://firebasestorage.googleapis.com/v0/b/test-df518.appspot.com/o/11_600x.jpg?alt=media&token=6601a271-9146-490e-abd0-6f2e58eeace4",
		description:
			"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque New producteu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
		tags: "tag4,tag5"
	},
	{
		name: "Morbi viverra hend",
		price: 19,
		sale: 88,
		img: "https://firebasestorage.googleapis.com/v0/b/test-df518.appspot.com/o/12_600x.jpg?alt=media&token=64acd3e6-b253-45bc-8924-5aa355717589",
		description:
			"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque New producteu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
		tags: "tag3,tag6"
	},
	{
		name: "Magnis dis parturient",
		price: 17,
		sale: 0,
		img: "https://firebasestorage.googleapis.com/v0/b/test-df518.appspot.com/o/5_600x.jpg?alt=media&token=96cf3483-c2b6-4b0c-a6e4-02399e977abd",
		description:
			"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque New producteu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
		tags: "tag3,tag6"
	},
	{
		name: "Donec quam felis",
		price: 150,
		sale: 200,
		img: "https://firebasestorage.googleapis.com/v0/b/test-df518.appspot.com/o/6_c18dfaa8-37e0-44ad-bc5b-31f0c5b06c41_600x.jpg?alt=media&token=ab26e714-d826-4f39-9eaa-dc687cc6397d",
		description:
			"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque New producteu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
		tags: "tag3,tag6"
	},
	{
		name: "Cum sociis natoque",
		price: 170,
		sale: 480,
		img: "https://firebasestorage.googleapis.com/v0/b/test-df518.appspot.com/o/7_f96edd11-989e-46e3-9f2e-c0bc8480df7e_600x.jpg?alt=media&token=9a299733-b6f0-489f-974d-475e878f3fdf",
		description:
			"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque New producteu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
		tags: "tag3,tag6"
	},
	{
		name: "Cras fringilla et",
		price: 220,
		sale: 0,
		img: "https://firebasestorage.googleapis.com/v0/b/test-df518.appspot.com/o/8_669ffe79-f0f9-451b-a870-684415525cb5_600x.jpg?alt=media&token=eb79447b-d463-4fcc-9ccf-2a85af174df6",
		description:
			"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque New producteu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
		tags: "tag3,tag6"
	},
	{
		name: "Consectetuer adipiscing",
		price: 210,
		sale: 0,
		img: "https://firebasestorage.googleapis.com/v0/b/test-df518.appspot.com/o/9_e1d315f2-9c92-4d8e-92d5-817b7bebbc2e_600x.jpg?alt=media&token=53c6dca2-3e47-477d-bb47-8df2520913a2",
		description:
			"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque New producteu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
		tags: "tag3,tag6"
	},
]

const initData = {
	name: "",
	price: 0,
	sale: 0,
	img: "",
	description: "",
	tags: ""
}

const AddProduct = () => {
	const [data, setData] = useState({ ...initData })

	const changeData = (valueObj) => {
		setData({
			...data,
			...valueObj,
		})
	}

	const add = async (product) => {
		try {
			const { name, price, img, description, tags } = product
			if ([name, price, img, description].some((value) => !value))
				throw new Error("Invalid data")
			const productTags = tags.split(",").map(tag => tag.trim())
			if (tags && tags.trim()) {
				await addTags(productTags)
			}
			await addProduct({
				...product,
				tags: `,${productTags.join(",")},`
			})
			alert("Add product successfully")
		} catch (err) {
			console.error(err.response?.data || err.message)
		}
	}

	const addSampleProducts = async () => {
		for (const product of products) {
			await add(product)
		}
		alert("Added sample products")
	}

	return (
		<>
			<Dashboard>
				<div>
					<h2 style={{ textAlign: "center" }}>Add products</h2>
					<div class="form-group">
						<label for="name" class="form-label">
							Name
						</label>
						<input
							className="form-input"
							value={data.name}
							onChange={(e) => changeData({ name: e.target.value })}
							placeholder="Name"
						/>
					</div>
					<Row className="d-flex justify-content-between">
						<Col span={11}>
							<div class="form-group">
								<label for="price" class="form-label">
									Price
								</label>
								<input
									className="form-input"
									type="number"
									min={0}
									value={data.price}
									onChange={(e) =>
										changeData({ price: parseInt(e.target.value) })
									}
									placeholder="Price"
								/>
							</div>

							<div class="form-group">
								<label for="price" class="form-label">
									Sale price
								</label>
								<input
									className="form-input"
									type="number"
									value={data.sale}
									onChange={(e) =>
										changeData({ sale: parseInt(e.target.value) })
									}
									placeholder="Sale"
								/>
							</div>

							<div class="form-group">
								<label for="price" class="form-label">
									Tags
								</label>
								<input
									className="form-input"
									value={data.tags}
									onChange={(e) =>
										changeData({ tags: e.target.value })
									}
									placeholder="Tags, split by commas"
								/>
							</div>
						</Col>
						<Col span={11}>
							<div class="form-group">
								<label for="price" class="form-label">
									Image URL
								</label>
								<input
									className="form-input"
									value={data.img}
									onChange={(e) => changeData({ img: e.target.value })}
									placeholder="Image url"
								/>
							</div>

							<div class="form-group">
								<label for="price" class="form-label">
									Description
								</label>
								<input
									className="form-input"
									value={data.description}
									onChange={(e) => changeData({ description: e.target.value })}
									placeholder="Description"
								/>
							</div>
						</Col>
					</Row>

					<div className="d-flex justify-content-center">
						<button onClick={() => add(data)}>Add</button>
						<button onClick={addSampleProducts}>Add all</button>
					</div>
				</div>
			</Dashboard>
		</>
	)
}

export default AddProduct
