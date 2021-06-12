import axios from "axios";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { useAppDispatch } from "../redux/hooks";
import { setEndpoints } from "../redux/projectAppSlice";

const EndpointCard = ({ endpoint }: any) => {
  const dispatch = useAppDispatch();
  const [endpointName] = React.useState(endpoint.endpointName);
  const [endpointDescription] = React.useState(endpoint.endpointDescription);
  const [endpointUrlPattern] = React.useState(endpoint.endpointUrlPattern);

  const removeEndpoint = (id:String) => {
      const queryDeleteString = `http://localhost:42069/api/delete/project/endpoint`;
      const body = {
          params: {
              endpointId: endpoint.endpointId
          }
      }
      console.log("request body: ", queryDeleteString, body)

      axios
          .delete(queryDeleteString, body)
          .then((response) => {
              console.log("response", response);
              const tagData = response.data;
              dispatch(setEndpoints(tagData));
          })
          .catch((error) => {
              console.log("There was an error on deleting: ", error);
          });
  };

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>{endpointName}</Card.Title>
          <Card.Text>{endpointDescription}</Card.Text>
          <Card.Text>{endpointUrlPattern}</Card.Text>
        </Card.Body>
        <Button
          variant="danger"
          value={endpoint.endpointId}
          onClick={(e) => removeEndpoint((e.target as HTMLButtonElement).value)}
        >
          Delete
        </Button>
        <Button variant="info">Modify</Button>
      </Card>
    </div>
  );
};

export default EndpointCard;
