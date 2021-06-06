import React, {useState} from 'react';
import DisplayFolder from "./DisplayFolder";
import { Modal } from 'react-bootstrap';
export default function AddToFolder(){
    const [data, setData] = useState(["school","work"]);
    //

    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Folders</Modal.Title>
            </Modal.Header>
            {data.map(i => {
                return(
                    <DisplayFolder folderName={i}/>
                )
            })}

        </>
    );
}