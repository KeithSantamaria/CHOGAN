import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {Button, Modal} from "react-bootstrap";
import ProjectActionsModal from "./ProjectActionsModal";

export default function ProjectElipsisBtn(props:any) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="black" onClick={handleShow}>
                <FontAwesomeIcon className='fas fa-ellipsis-h' icon={faEllipsisH}/>
            </Button>
            
            <Modal show={show} onHide={handleClose}>
                <ProjectActionsModal project={props.project}/>
            </Modal>
            
        </div>
    );
}

