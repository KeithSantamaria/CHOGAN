import axios from "axios";
import { Button, Form, Container } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
    resetCreateNewTagForm,
    selectProjectApp,
    setCreateNewTagForm,
    setTags,
} from "../../redux/projectAppSlice";

const TagForm = (tag: any) => {
    const projectAppState = useAppSelector(selectProjectApp);
    const dispatch = useAppDispatch();

    const formChangeHandler = (event: any) => {
        const fieldName = event.target.name;
        const value = event.target.value;
        dispatch(setCreateNewTagForm({ fieldName, value }));
    };

    const addTag = () => {
        //Test
        const projectId = "60bc36b65d2b0da1deb9ada2";
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
                //production
                //projectId: projectAppState.project.projectId,
                //test
                projectId : projectId,
            };
            console.log(tag);

            axios
                .post(queryString, tag)
                .then((response) => {
                    console.log("response", response);
                    const tagData = response.data;
                    dispatch(setTags(tagData));
                    dispatch(resetCreateNewTagForm());
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    return (
        <Container className="create-proj-form-container">
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
                        className="modal-create-form-textarea"
                        name="tagDescription"
                        as="textarea"
                        rows={3}
                        onChange={formChangeHandler}
                    />
                </Form.Group>
                <Button onClick={addTag}>Save</Button>
            </Form>
        </Container>
    );
};

export default TagForm;