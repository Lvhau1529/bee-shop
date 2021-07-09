import React from "react"
import { useHistory } from "react-router-dom"
import { Form, Input, Button } from 'antd'

import firebase from "../../configs/firebase"
import useUserAuth from "../../hooks/useUserAuth"

const Signup = () => {
    const history = useHistory()

    useUserAuth(() => history.push("/"))

    const signup = async values => {
        try {
            const { email, password } = values
            await firebase.auth().createUserWithEmailAndPassword(email, password)
            history.push("/")
        } catch (err) {
            alert(err.response?.data || err.message)
            console.error(err)
        }
    }

    const onFinishFailed = (errorInfo) => {
        alert(errorInfo)
    }

    const signupStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
    }

    return <div style={signupStyle}>
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
                    Sign up
                </Button>
            </Form.Item>
        </Form>
    </div>
}

export default Signup
