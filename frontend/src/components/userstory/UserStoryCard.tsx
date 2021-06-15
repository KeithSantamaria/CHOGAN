import axios from "axios";
import React from "react";
import { Button, Col, Row, ListGroup } from "react-bootstrap";
import { useAppDispatch } from "../../redux/hooks";
import { setUserStories } from "../../redux/projectAppSlice";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash, faEdit} from "@fortawesome/free-solid-svg-icons";

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
    <>
      {/* <Card>
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
      </Card> */}

      <ListGroup.Item className="project-list-item">
        <Row>

          <Col className="project-description">
              {userStoryDescription}
          </Col>

          <Col>
            <span className="float-right">
              <Button
                value={userStory.userStoryId}
                onClick={(e) => removeUserStory(userStory.userStoryId)}
                variant="outline-dark"
              >
                <FontAwesomeIcon
                  style={{height: '100%'}}
                  className="fa-1x"
                  icon={faTrash}
                /> 
              </Button>

            <span style={{paddingRight: '1em'}}></span>

            <Button
              value={userStory.userStoryId}
              // onClick={(e) => editEndpoint((e.target as HTMLButtonElement).value)}
              variant="outline-warning"
            >
              <FontAwesomeIcon
                style={{height: '100%'}}
                className="fa-1x"
                icon={faEdit}
              /> 
            </Button>
            </span>
          </Col>
        </Row>
      </ListGroup.Item>
      <br></br>
    </>
  );
};

export default UserStoryCard;
