import React from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";

import firebase from "../../configs/firebase";
import useUserAuth from "../../hooks/useUserAuth";

const Login = () => {
	const history = useHistory();

	useUserAuth(() => history.push("/"));

	const login = async (values) => {
		try {
			const { email, password } = values;
			await firebase.auth().signInWithEmailAndPassword(email, password);
			history.push("/");
		} catch (err) {
			alert(err.response?.data || err.message);
			console.error(err);
		}
	};

	const onFinishFailed = (errorInfo) => {
		alert(errorInfo);
	};

	return (
		<>
			<div>
				<h1 class="signup-heading">Log in</h1>
				<Form
					name="basic"
					initialValues={{
						email: "",
						password: "",
					}}
					layout="vertical"
					onFinish={login}
					onFinishFailed={onFinishFailed}
				>
					<Form.Item
						label="Email"
						name="email"
						rules={[
							{
								required: true,
								message: "Please input your email!",
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="Password"
						name="password"
						rules={[
							{
								required: true,
								message: "Please input your password!",
							},
						]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item>
						<Button className="form-submit" type="primary" htmlType="submit">
							Sign in
						</Button>
					</Form.Item>
				</Form>
				<p class="signup-already">
					Don't have an account ?{" "}
					<a href onClick={() => history.push("/signup")}>
						Sign up
					</a>
				</p>
				<p class="signup-already">
					<a href onClick={() => history.push("/forgot-password")}>
						Forgot your password ?
					</a>
				</p>
			</div>
		</>
	);
};

export default Login;
