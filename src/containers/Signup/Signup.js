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
				"The email address is already in use by another account."
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
				description="The email address is already in use by another account."
			/>
			<h1 class="signup-heading">Create Account</h1>
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
}

export default Signup;
