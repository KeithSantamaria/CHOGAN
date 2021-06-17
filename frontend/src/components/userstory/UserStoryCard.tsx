import React from "react";
import { Button, Col, Row, ListGroup } from "react-bootstrap";
import { useAppDispatch } from "../../redux/hooks";
import { deleteUserStory } from "../../redux/projectAppSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const UserStoryCard = ({ userStory }: any) => {
  const dispatch = useAppDispatch();
  const [userStoryDescription] = React.useState(userStory.userStoryDescription);

  const removeUserStory = (id: string) => {
    const body = { params: { userStoryId: id } };
    dispatch(deleteUserStory(body));
  };
  return (
    <>
      <ListGroup.Item className="project-list-item">
        <Row>
          <Col className="project-description">{userStoryDescription}</Col>
          <Col>
            <span className="float-right">
              <Button
                value={userStory.userStoryId}
                onClick={(e) => removeUserStory(userStory.userStoryId)}
                variant="outline-dark"
              >
                <FontAwesomeIcon
                  style={{ height: "100%" }}
                  className="fa-1x"
                  icon={faTrash}
                />
              </Button>
              <span style={{ paddingRight: "1em" }}></span>
            </span>
          </Col>
        </Row>
      </ListGroup.Item>
      <br></br>
    </>
  );
};

export default UserStoryCard;
