import React from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";

const Shop = () => {
    return (
        <Container>
            <Row className='mt-2'>
                <col md={3}>
                    <TypeBar></TypeBar></col>
                <col md={9}>
                    <BrandBar></BrandBar>
                    <DeviceList></DeviceList>
                </col>
            </Row>


        </Container>
    );
};

export default Shop;
