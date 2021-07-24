import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";
import AlertFunction from "../../bee-shop/includes/components/alert";

import firebase from "../../configs/firebase";
import useUserAuth from "../../hooks/useUserAuth";

function Signup() {
	const [hiddenAlert, setHiddenAlert] = useState("none");

	const history = useHistory();

	useUserAuth(() => history.push("/"));

	const signup = async (values) => {
		try {
			const { email, password } = values;
			await firebase.auth().createUserWithEmailAndPassword(email, password);
			history.push("/");
		} catch (err) {
			// alert(err.response?.data || err.message);
			setHiddenAlert("");
			console.error(
				err,
				"Địa chỉ email này đã được sử dụng. Vui lòng sử dụng email khác."
			);
		}
	};

	// const onFinishFailed = (errorInfo) => {
	// 	alert(errorInfo);
	// };

	return (
		<div>
			<AlertFunction
				hidden={hiddenAlert}
				description="Địa chỉ email này đã được sử dụng. Vui lòng sử dụng email khác."
			/>
			<h1 class="signup-heading">Tạo tài khoản mới</h1>
			<Form
				name="basic"
				layout="vertical"
				initialValues={{
					email: "",
					password: "",
				}}
				onFinish={signup}
				// onFinishFailed={onFinishFailed}
			>
				<Form.Item
					label="Email"
					name="email"
					rules={[
						{
							required: true,
							message: "Nhập email của bạn!",
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Mật khẩu"
					name="password"
					rules={[
						{
							required: true,
							message: "Nhập mật khẩu của bạn!",
						},
					]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item>
					<Button className="form-submit" type="primary" htmlType="submit">
						Đăng ký
					</Button>
				</Form.Item>
			</Form>
			<p class="signup-already">
				<a href onClick={() => history.push("/login")}>
					Quay lại trang đăng nhập
				</a>
			</p>
		</div>
	);
}

export default Signup;
