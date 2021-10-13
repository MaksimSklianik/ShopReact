import React from 'react';
import {Form, FormControl, Modal} from "react-bootstrap";
import {Button} from "bootstrap";

const CreateBrand = ({show, onHide}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    добавить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <FormControl placeholder={'ведите названия  типа '}>

                    </FormControl>
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>закрыть</Button>
                <Button variant='outline-success' onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;
