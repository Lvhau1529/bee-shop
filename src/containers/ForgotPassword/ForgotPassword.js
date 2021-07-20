import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";
import AlertFunction from "../../bee-shop/includes/components/alert";

import firebase from "../../configs/firebase";
import useUserAuth from "../../hooks/useUserAuth";

function ForgotPassword() {
	const [hiddenAlert, setHiddenAlert] = useState("none");
	const [checked, setChecked] = useState(false);

	const history = useHistory();

	useUserAuth(() => history.push("/"));

	const submit = async (values) => {
		try {
			const { email } = values;
			await firebase.auth().sendPasswordResetEmail(email);
			// alert("Please check your email to reset your password");
			setChecked(true);
			setHiddenAlert("");
			// history.push("/login");
		} catch (err) {
			// alert(err.response?.data || err.message);
			setHiddenAlert("");
			console.error(
				err,
				"There is no user record corresponding to this identifier. The user may have been deleted."
			);
		}
	};

	// const onFinishFailed = (errorInfo) => {
	// 	alert(errorInfo);
	// };

	return (
		<div>
			{checked ? (
				<AlertFunction
					hidden={hiddenAlert}
					message="Success"
					description="Please check your email to reset your password."
					type="success"
				/>
			) : (
				<AlertFunction
					hidden={hiddenAlert}
					description="There is no user record corresponding to this identifier. The user may have been deleted."
				/>
			)}

			<h1 className="signup-heading">Reset Password</h1>
			<Form
				name="basic"
				initialValues={{
					email: "",
				}}
				layout="vertical"
				onFinish={submit}
				// onFinishFailed={onFinishFailed}
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
}

export default ForgotPassword;
