import {Button, Form} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {FormEvent, useState} from "react";

export default function CreateProjectForm(props:any){
    const [projectName, setProjectName] = useState("");
    const [description, setDescription]= useState("");

    const submit =(e:FormEvent)=> {
        e.preventDefault();
    }

    return(
    <Container className="create-proj-form-container">
        <Form >
            <h4>New Project</h4>
            <div>Create new project name and Description</div>
            <div>Manage your project</div>

            <Form.Group className="project-name-wrapper">
                <Form.Label>Project Name</Form.Label>
                <Form.Control
                    placeholder="Enter project name"
                    onChange={(e)=>setProjectName(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    className="modal-create-form-textarea"
                    rows={5}
                    onChange={(e)=>setDescription(e.target.value)}
                />
            </Form.Group>

            <span style={{float: 'right'}} className="btn-group-wrapper">
                <span>
                    <Button variant="outline" onClick={props.handleClose}>Close</Button>
                </span>
               
                <Button variant="primary" onClick={submit}>Create</Button>
            </span>
           
        </Form>
    </Container>
);
}