import React from 'react';
import {
    Card, Container, Form, NavLink, Row
} from "react-bootstrap";
import {Button} from "bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {useLocation} from "react-router";


const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    return (
        <Container className="d-flex justify-content-center align-items-center"
                   style={{height: window.innerHeight - 54}}>

            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? "авторизация" : "регистрация"}</h2>
                <Form className=" d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="ведите имайл....">
                    </Form.Control>
                    <Form.Control
                        className="mt-3"
                        placeholder="ведите пароль....">
                    </Form.Control>
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div>
                                нет акаунта ? <NavLink to={REGISTRATION_ROUTE}>регистрация </NavLink>
                            </div>
                            :
                            <div>
                                есть акаунта ? <NavLink to={LOGIN_ROUTE}>войдите</NavLink>
                            </div>}

                        <Button
                            variant={"outline-success"}>
                            {isLogin?'Enter':'registration'}
                            </Button>
                    </Row>

                </Form>
            </Card>
        </Container>
    );
};

export default Auth;
