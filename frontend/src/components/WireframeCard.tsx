import axios from "axios";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { useAppDispatch } from "../redux/hooks";
import { setWireframes } from "../redux/projectAppSlice";

const WireframeCard = ({ wireframe }: any) => {
  const dispatch = useAppDispatch();
  const [wireframeName] = React.useState(wireframe.wireframeName);
  const [wireframeImg] = React.useState(wireframe.wireframeImageUrl);
  const [wireframeDescription] = React.useState(wireframe.wireframeDescription);

  const removeWireframe = (id: String) => {
    const queryString = `http://localhost:42069/api/delete/project/wireframe`;
    const body = {
      params: {
        wireframeId: id,
      },
    };
    axios
      .delete(queryString, body)
      .then((response) => {
        const wireframeData = response.data;
        dispatch(setWireframes(wireframeData));
      })
      .catch((error) => {
        console.log("There was an error on deleting: ", error);
      });
  };



  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>{wireframeName}</Card.Title>
          <Card.Img variant="top" src={wireframeImg}/>
          <Card.Text>{wireframeDescription}</Card.Text>
        </Card.Body>
        <Button
          variant="danger"
          value={wireframe.wireframeId}
          onClick={(e) => removeWireframe((e.target as HTMLButtonElement).value)}
        >
          Delete
        </Button>
        <Button variant="info">Modify</Button>
      </Card>
    </div>
  );
};

export default WireframeCard;
