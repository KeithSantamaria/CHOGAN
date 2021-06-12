import axios from "axios";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { useAppDispatch } from "../../redux/hooks";
import { setUserStories } from "../../redux/projectAppSlice";

const UserStoryCard = ({ userStory }: any) => {
  const dispatch = useAppDispatch();
  const [userStoryDescription] = React.useState(userStory.userStoryDescription);

  const removeUserStory = (id: string) => {
    const queryString = `http://localhost:42069/api/delete/project/userstory`;
    const body = {
      params: {
        userStoryId: id,
      },
    };
    axios
      .delete(queryString, body)
      .then((response) => {
        console.log("response", response);
        const userStoryData = response.data;
        dispatch(setUserStories(userStoryData));
      })
      .catch((error) => {
        console.log("There was an error on deleting: ", error);
      });
  };
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Text>{userStoryDescription}</Card.Text>
        </Card.Body>
        <Button
          variant="danger"
          value={userStory.userStoryId}
          onClick={(e) =>
            removeUserStory((e.target as HTMLButtonElement).value)
          }
        >
          Delete
        </Button>
        <Button variant="info">Modify</Button>
      </Card>
    </div>
  );
};

export default UserStoryCard;
