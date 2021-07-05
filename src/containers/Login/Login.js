import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import {
    Button,
    Card,
    CardBody,
    CardGroup,
    Col,
    Container,
    Form,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row,
} from "reactstrap"
import { FaUserAlt, FaLock } from "react-icons/fa"

import firebase from "../../configs/firebase"
import useUserAuth from "../../hooks/useUserAuth"

const Login = () => {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useUserAuth(() => history.push("/"))

    const login = async e => {
        try {
            e.preventDefault()
            await firebase.auth().signInWithEmailAndPassword(email, password)
            history.push("/")
        } catch (err) {
            alert(err.response?.data || err.message)
        }
    }

    const ICON_SIZE = 18

    return <Form onSubmit={login}>
        <div className="vh-100 d-flex align-items-center justify-content-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md="4">
                        <CardGroup>
                            <Card className="p-4">
                                <CardBody>
                                    <h1>Login</h1>
                                    <p className="text-muted d-flex align-items-center justify-content-between">
                                        Sign in to your account
                                    </p>
                                    <InputGroup className="mb-3">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <FaUserAlt size={ICON_SIZE} />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            type="text"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            placeholder="Email"
                                            required
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-4">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <FaLock size={ICON_SIZE} />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            type="password"
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                            placeholder="Password"
                                            required
                                        />
                                    </InputGroup>
                                    <Row>
                                        <Col xs="6">
                                            <Button color="primary" className="px-4" type="submit">
                                                Login
                                            </Button>
                                        </Col>
                                        <Col xs="6" className="text-right" />
                                    </Row>
                                </CardBody>
                            </Card>
                        </CardGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    </Form>
}

export default Login
