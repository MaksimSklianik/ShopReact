import React, {useContext} from "react";
import {Context} from "../index";
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";
import {Button} from "bootstrap";
import {observer} from "mobx-react-lite";


const Navbar = observer(() => {
        const {user} = useContext(Context)
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                <NavLink style={{color: "white"}} to={SHOP_ROUTE}>купиДевайс</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: "white"}}>
                        <Button variant={"outline-light"}>админ панель</Button>
                        <Button variant={"outline-light"} className="ml-2">войти </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: "white"}}>
                        <Button variant={"outline-light"} onClic={() => user.setIsAuth(true)}>Авторизация</Button>
                    </Nav>
                }
                </Container>
            </Navbar>

        )
    }
)
