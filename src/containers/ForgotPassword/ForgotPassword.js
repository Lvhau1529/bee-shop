import React from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";

import firebase from "../../configs/firebase";
import useUserAuth from "../../hooks/useUserAuth";

const ForgotPassword = () => {
	const history = useHistory();

	useUserAuth(() => history.push("/"));

	const submit = async (values) => {
		try {
			const { email } = values;
			await firebase.auth().sendPasswordResetEmail(email);
			alert("Please check your email to reset your password");
			history.push("/login");
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
			<h1 className="signup-heading">Reset Password</h1>
			<Form
				name="basic"
				initialValues={{
					email: "",
				}}
				layout="vertical"
				onFinish={submit}
				onFinishFailed={onFinishFailed}
			>
				<Form.Item
					label="Your email"
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

				<Form.Item>
					<Button className="form-submit" type="primary" htmlType="submit">
						Reset
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

export default ForgotPassword;
