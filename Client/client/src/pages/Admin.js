import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";

const admin = () => {
    const [brandVisible, SetBrandVisible] = useState(false)
    const [typeVisible, SetTypeVisible] = useState(false)
    const [deviceVisible, SetDeviceVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <button variant={"outline-dark "} className="mt-4 p-2">добавить тип</button>
            <button variant={"outline-dark "} className="mt-4 p-2"> добавить бренд</button>
            <button variant={"outline-dark "} className="mt-4 -2"> добавить устройство</button>
            <CreateBrand show={brandVisible} onHide={() => SetBrandVisible(false)}></CreateBrand>
            <CreateDevice show={deviceVisible} onHide={() => SetDeviceVisible(false)}></CreateDevice>
            <CreateType show={typeVisible} onHide={() => SetTypeVisible(false)}></CreateType>
        </Container>

    );
};

export default admin
