import axios from "axios";
import { Button, Form, Container } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
    resetCreateNewTagForm,
    selectProjectApp,
    setCreateNewTagForm, setProject,
    setTags,
} from "../redux/projectAppSlice";
import TagForm from "./tag/TagForm";
import React, {useEffect, useState} from "react";

function UpdateTag(id: any) {
    const [tagName, setTagName] = useState("");
    const [tagDescription, setTagDescription] = useState("");
    const [projectId, setProjectId] = useState("");
    const dispatch = useAppDispatch();

    const tagNameHandler = (event: any) => {
        setTagName(event.target.value);
    }
    const tagDescriptionHandler = (event: any) => {
        setTagDescription(event.target.value);
    }

    const getProperty = () => {
        const queryString = `http://localhost:42069/api/read/project/tag`;
        const body = {
            params: {
                tagId: id.id
            },
        };
        axios.get(queryString, body)
            .then((response) => {
                setTagName(response.data.tagName);
                setTagDescription(response.data.tagDescription);
                setProjectId(response.data.projectId)
            })
            .catch((error) => {
                console.log("There was an error: ", error);
            });

    }

    useEffect(() => {
        getProperty();
    },[]);

    const updateTag = () => {
        const queryString = `http://localhost:42069/api/update/project/tag`;
        const tag = {
            tagName: tagName,
            tagDescription: tagDescription,
            projectId: projectId,
            tagId: id.id
        }
        console.log(tag);
        axios
            .put(queryString, tag)
            .then((response) => {
                console.log("Update Tag response", response);
                const newTags = response.data;
                dispatch(setTags(newTags))
            })

    }

    return (
        <Container className="update-proj-form-container">
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>New Tag Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={tagName}
                        onChange={tagNameHandler}
                    />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>New Technologies</Form.Label>
                    <Form.Control
                        placeholder={tagDescription}
                        as="textarea"
                        rows={3}
                        onChange={tagDescriptionHandler}
                    />
                </Form.Group>
                <Button onClick={updateTag}>Update</Button>
            </Form>
        </Container>
    );






}
export default UpdateTag;