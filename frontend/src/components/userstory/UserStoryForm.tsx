import { Button, Form, Container } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  selectProjectApp,
  setCreateNewUserStoryForm,
  createUserStory
} from "../../redux/projectAppSlice";

const UserStoryForm = () => {
  const projectAppState = useAppSelector(selectProjectApp);
  const dispatch = useAppDispatch();
  const projectId = projectAppState.project.projectId;

  const formChangeHandler = (event: any) => {
    const fieldName = event.target.name;
    const value = event.target.value;
    dispatch(setCreateNewUserStoryForm({ fieldName, value }));
  };

  const addUserStory = () => {
    if (projectAppState.createNewUserStoryForm.userStoryDescription === "") {
      console.log("There is nothing to add");
    } else {
      const userStory = {
        userStoryDescription: projectAppState.createNewUserStoryForm.userStoryDescription,
        projectId: projectId,
      };
      dispatch(createUserStory(userStory));
    }
  };

  return (
    <Container className="create-proj-form-container">
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>User Story Description</Form.Label>
          <Form.Control
            className="modal-create-form-textarea"
            name="userStoryDescription"
            as="textarea"
            rows={3}
            onChange={formChangeHandler}
          />
        </Form.Group>
        <Button onClick={addUserStory}>Save</Button>
      </Form>
    </Container>
  );
};

export default UserStoryForm;
