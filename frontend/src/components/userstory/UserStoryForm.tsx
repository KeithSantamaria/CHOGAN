import axios from "axios";
import { Button, Form, Container } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  resetCreateNewUserStoryForm,
  selectProjectApp,
  setCreateNewEndpointForm,
  setCreateNewUserStoryForm,
  setUserStories,
} from "../../redux/projectAppSlice";

const UserStoryForm = () => {
  const projectAppState = useAppSelector(selectProjectApp);
  const dispatch = useAppDispatch();

  const formChangeHandler = (event: any) => {
    const fieldName = event.target.name;
    const value = event.target.value;
    dispatch(setCreateNewUserStoryForm({ fieldName, value }));
  };

  const addUserStory = () => {
    // Test
    const projectId = "60bc36b65d2b0da1deb9ada2";

    const queryString = `http://localhost:42069/api/create/project/userstory`;

    if (projectAppState.createNewUserStoryForm.userStoryDescription === "") {
      alert("There is nothing to add");
    } else {
      const userStory = {
        userStoryDescription:
          projectAppState.createNewUserStoryForm.userStoryDescription,
        //production
        //projectId: projectAppState.project.projectId,

        //test
        projectId: projectId,
      };

      axios.post(queryString, userStory).then((response) => {
        console.log("response", response);
        const userStoryData = response.data;
        dispatch(setUserStories(userStoryData));
        dispatch(resetCreateNewUserStoryForm());
      });
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
            // placeholder="Employees"
            onChange={formChangeHandler}
          />
        </Form.Group>
        <Button onClick={addUserStory}>Save</Button>
      </Form>
    </Container>
  );
};

export default UserStoryForm;
