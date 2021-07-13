import React from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";

import firebase from "../../configs/firebase";
import useUserAuth from "../../hooks/useUserAuth";

const Signup = () => {
	const history = useHistory();

	useUserAuth(() => history.push("/"));

	const signup = async (values) => {
		try {
			const { email, password } = values;
			await firebase.auth().createUserWithEmailAndPassword(email, password);
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
		<div>
			<h1 class="signup-heading">Create Account</h1>
			<Form
				name="basic"
				layout="vertical"
				initialValues={{
					email: "",
					password: "",
				}}
				onFinish={signup}
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
						Sign up
					</Button>
				</Form.Item>
			</Form>
			<p class="signup-already">
				<a href onClick={() => history.push("/login")}>
					Back to log in
				</a>
			</p>
		</div>
	);
};

export default Signup;
