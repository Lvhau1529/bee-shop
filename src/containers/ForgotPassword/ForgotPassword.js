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
					description="Vui lòng kiểm tra email chúng tôi đã gửi mail đặt lại mật khẩu."
					type="success"
				/>
			) : (
				<AlertFunction
					hidden={hiddenAlert}
          description="Chúng tôi tìm thấy địa chỉ email của bạn. Vui lòng nhập lại email."
					// description="There is no user record corresponding to this identifier. The user may have been deleted."
				/>
			)}

			<h1 className="signup-heading">Đặt lại mật khẩu</h1>
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
					label="Email"
					name="email"
					rules={[
						{
							required: true,
							message: "Vui lòng nhập email!",
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item>
					<Button className="form-submit" type="primary" htmlType="submit">
						Đặt lại
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

export default ForgotPassword;
