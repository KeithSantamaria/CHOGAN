import axios from "axios";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
    resetCreateNewTagForm,
    selectProjectApp,
    setCreateNewTagForm,
    setProject, setTag,
} from "../redux/projectAppSlice";

const TagForm = (tag: any) => {
    const projectAppState = useAppSelector(selectProjectApp);
    const dispatch = useAppDispatch();

    const formChangeHandler = (event: any) => {
        const fieldName = event.target.name;
        const value = event.target.value;
        dispatch(setCreateNewTagForm({ fieldName, value }));
    };

    const addTag = () => {
        const queryString = `http://localhost:42069/api/create/project/tag`;
        if (
            projectAppState.createNewTagForm.tagDescription === "" ||
            projectAppState.createNewTagForm.tagName === ""
        ) {
            alert("There is nothing to add");
        } else {
            const tag = {
                tagName: projectAppState.createNewTagForm.tagName,
                tagDescription: projectAppState.createNewTagForm.tagDescription,
                projectId : "60c2aecdc4c64aa2db316e6d"
            };
            console.log(tag);

            axios
                .post(queryString, tag)
                .then((response) => {
                    console.log("response", response);
                    dispatch(setTag(response.data));
                    dispatch(resetCreateNewTagForm());
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    return (
        <div>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Tag Name</Form.Label>
                    <Form.Control
                        name="tagName"
                        type="text"
                        placeholder="Documentation"
                        onChange={formChangeHandler}
                    />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Technologies</Form.Label>
                    <Form.Control
                        name="tagDescription"
                        as="textarea"
                        rows={3}
                        onChange={formChangeHandler}
                    />
                </Form.Group>
                <Button onClick={addTag}>Save</Button>
            </Form>
        </div>
    );
};

export default TagForm;