import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Button} from "react-bootstrap";
import "../../../css/home/PopUpModal/editProject.css"

type ProjectProp = {
    title: string,
    description: string
}

export default function EditProject({title, description }: ProjectProp) {
    const [currTitle, setCurrTitle] = useState(title);
    const [currDescription, setCurrDescription] = useState(description);
    // onChange={(e)=>{currTitle=e.target.value}}
    // onChange={(e)=>{currDescription=e.target.value}}


    function saveChanges() {
        alert("save this shizzz");
    }

    return (
        <div>
            <span className="edit-card">
                <form >
                    <input type="text" value={currTitle}
                           onChange={(e)=>{setCurrTitle(e.target.value)}}/>
                    <input type="text" value={currDescription}
                           onChange={(e)=>{setCurrDescription(e.target.value)}}/>

                           <Button variant="success" className="save-changes" onClick={saveChanges}>Save Changes</Button>
                </form>
            </span>
        </div>
    );
}