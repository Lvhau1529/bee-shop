import React from "react"
import { useHistory } from "react-router-dom"
import { Form, Input, Button } from 'antd'

import firebase from "../../configs/firebase"
import useUserAuth from "../../hooks/useUserAuth"

const ForgotPassword = () => {
    const history = useHistory()

    useUserAuth(() => history.push("/"))

    const submit = async values => {
        try {
            const { email } = values
            await firebase.auth().sendPasswordResetEmail(email)
            alert("Please check your email to reset your password")
            history.push("/login")
        } catch (err) {
            alert(err.response?.data || err.message)
            console.error(err)
        }
    }

    const onFinishFailed = (errorInfo) => {
        alert(errorInfo)
    }

    const style = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
    }

    return <div style={style}>
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
            }}
            onFinish={submit}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Your email"
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
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Reset
                </Button>
                <Button type="link" onClick={() => history.push("/login")}>
                    Back to login
                </Button>
            </Form.Item>
        </Form>
    </div>
}

export default ForgotPassword
