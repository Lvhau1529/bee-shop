import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";
import AlertFunction from "../../bee-shop/includes/components/alert";

import firebase from "../../configs/firebase";
import useUserAuth from "../../hooks/useUserAuth";

function Login() {
	const [hiddenAlert, setHiddenAlert] = useState("none");

	const history = useHistory();

	useUserAuth(() => history.push("/"));

	const login = async (values) => {
		try {
			const { email, password } = values;
			await firebase.auth().signInWithEmailAndPassword(email, password);
			history.push("/");
		} catch (err) {
			// alert(err.response?.data || err.message);
			setHiddenAlert("");
			console.error(err);
		}
	};

	// const onFinishFailed = (errorInfo) => {
	// 	alert(errorInfo);
	// };

	return (
		<>
			<div>
				<AlertFunction
					hidden={hiddenAlert}
					description="Tài khoản hoặc mật khẩu không chính xác."
				/>
				;<h1 class="signup-heading">Đăng nhập</h1>
				<Form
					name="basic"
					initialValues={{
						email: "",
						password: "",
					}}
					layout="vertical"
					onFinish={login}
					// onFinishFailed={onFinishFailed}
				>
					<Form.Item
						label="Email"
						name="email"
						rules={[
							{
								required: true,
								message: "Vui lòng nhập email của bạn!",
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
								message: "Vui lòng nhập mật khẩu của bạn!",
							},
						]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item>
						<Button className="form-submit" type="primary" htmlType="submit">
							Đăng nhập
						</Button>
					</Form.Item>
				</Form>
				<p class="signup-already">
					Tạo tài khoản ?{" "}
					<a href onClick={() => history.push("/signup")}>
						Đăng ký
					</a>
				</p>
				<p class="signup-already">
					<a href onClick={() => history.push("/forgot-password")}>
						Quên mật khẩu ?
					</a>
				</p>
			</div>
		</>
	);
}

export default Login;
