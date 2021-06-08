import React, {useState} from 'react';
import DisplayFolder from "./DisplayFolder";
import { Modal } from 'react-bootstrap';
import "../../../css/home/PopUpModal/popUpModal.css"

export default function AddToFolder(){
    const [data, setData] = useState(["school","work"]);

    return (
        <>
            <Modal.Header className="sub-modal action" closeButton>
                <Modal.Title>Folders</Modal.Title>
            </Modal.Header>
            <Modal.Body className="sub-modal-body">
                {data.map(i => {
                    return(
                        <DisplayFolder folderName={i}/>
                    )
                })}
            </Modal.Body>
            

        </>
    );
}