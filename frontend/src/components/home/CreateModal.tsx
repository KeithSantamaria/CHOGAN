import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState, useEffect} from 'react';

import {Button, Container, Modal} from 'react-bootstrap';
import {faPlus, faSortDown, faSortUp} from "@fortawesome/free-solid-svg-icons";

import CreateProjectForm from "../home/form/CreateProjectForm";


export default function CreateModal() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const createModal = (
        <Modal
            className="modal-create-wrapper"
            show={show}
            onHide={handleClose}
            backdrop="static"
            size="lg"
        >
            <Modal.Header closeButton>
                {/* <Modal.Title>New Project</Modal.Title> */}
            </Modal.Header>
            <Modal.Body>
                <CreateProjectForm />
            </Modal.Body>
        </Modal>
    )

    return (    
        <Container >
            <span className="fa-icon-new-proj-wrapper">
                <span className="fa-icon-new-proj-wrapper-1">
                    <Button onClick={handleShow}>
                        <FontAwesomeIcon icon={faPlus} className="fa-icon-make-new-proj fa-2x" />
                    </Button>
                </span>
            </span>
            
            {createModal}
        </Container>
    )
}