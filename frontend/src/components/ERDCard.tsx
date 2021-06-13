import axios from "axios";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { useAppDispatch } from "../redux/hooks";
import { setERDiagrams } from "../redux/projectAppSlice";

const ERDCard = ({ erd }: any) => {
  const dispatch = useAppDispatch();
  const [erdName] = React.useState(erd.erdName);
  const [erdImg] = React.useState(erd.erdImg);
  const [erdDescription] = React.useState(erd.erdDescription);

  const removeERD = (id: String) => {
    const queryString = `http://localhost:42069/api/delete/project/ERD`;
    const body = {
      params: {
        erdId: id,
      },
    };
    axios
      .delete(queryString, body)
      .then((response) => {
        const erdData = response.data;
        dispatch(setERDiagrams(erdData));
      })
      .catch((error) => {
        console.log("There was an error on deleting: ", error);
      });
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{erdName}</Card.Title>
        <Card.Img variant="top" src="{erdImg}" />
      </Card.Body>
      <Button
        variant="danger"
        value={erd.erdId}
        onClick={(e) => removeERD((e.target as HTMLButtonElement).value)}
      >
        Delete
      </Button>
      <Button variant="info">Modify</Button>
    </Card>
  );
};

export default ERDCard;
