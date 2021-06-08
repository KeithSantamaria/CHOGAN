import {Button, Form} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import React, {FormEvent, useState} from "react";
import Modal from "react-bootstrap/Modal";

export default function CreateProjectForm(props:any){
    const [projectName, setProjectName] = useState("");
    const [description, setDescription]= useState("");

    // React.useEffect(()=>{
    //     alert("")
    // },[projectName]);

    const submit =(e:FormEvent)=> {
        e.preventDefault();
        // return alert(projectName+"   "+ description);
        alert("qye pasosoo" + projectName+description);
    }

    return(
    <Container>
        <Form >
            <Form.Group >
                <Form.Label>ProjectTitle</Form.Label>
                <Form.Control placeholder="ProjectTitle"
                              onChange={(e)=>setProjectName(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3}
                              onChange={(e)=>setDescription(e.target.value)}/>
            </Form.Group>

            <Button variant="primary" onClick={submit}>Create</Button>
            <Button variant="secondary" onClick={props.handleClose}>Close</Button>
        </Form>
    </Container>
);
}