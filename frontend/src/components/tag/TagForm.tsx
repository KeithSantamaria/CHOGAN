import { Button, Form, Container } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  selectProjectApp,
  setCreateNewTagForm,
  createTag
} from "../../redux/projectAppSlice";

const TagForm = (tag: any) => {
  const projectAppState = useAppSelector(selectProjectApp);
  const dispatch = useAppDispatch();
  const projectId = projectAppState.project.projectId;

  const formChangeHandler = (event: any) => {
    const fieldName = event.target.name;
    const value = event.target.value;
    dispatch(setCreateNewTagForm({ fieldName, value }));
  };

  const addTag = () => {
    if (
      projectAppState.createNewTagForm.tagDescription === "" ||
      projectAppState.createNewTagForm.tagName === ""
    ) {
      console.log("ERROR: There is nothing to add");
    } else {
      const tag = {
        tagName: projectAppState.createNewTagForm.tagName,
        tagDescription: projectAppState.createNewTagForm.tagDescription,
        projectId: projectId,
      };

      dispatch(createTag(tag));
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
