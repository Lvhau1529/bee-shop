import React from "react"
import { useHistory } from "react-router-dom"
import { Form, Input, Button, Checkbox } from 'antd'

import firebase from "../../configs/firebase"
import useUserAuth from "../../hooks/useUserAuth"

const Login = () => {
    const history = useHistory()

    useUserAuth(() => history.push("/"))

    const login = async values => {
        try {
            const { email, password } = values
            await firebase.auth().signInWithEmailAndPassword(email, password)
            history.push("/")
        } catch (err) {
            alert(err.response?.data || err.message)
        }
    }

    const onFinishFailed = (errorInfo) => {
        alert(errorInfo)
    }

    const loginStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
    }

    return <div style={loginStyle}>
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                email: "",
                password: ""
            }}
            onFinish={login}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Email"
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your email!',
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
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    </div>
}

export default Login
