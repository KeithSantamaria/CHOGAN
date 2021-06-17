import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { useAppDispatch } from "../../redux/hooks";
import { deleteModel } from "../../redux/projectAppSlice";

const ModelCard = ({ model }: any) => {
  const dispatch = useAppDispatch();

  const removeModel = () => {
    const body = { params: { modelId: model.modelId } };
    dispatch(deleteModel(body));
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>
          {model.modelName}
          <Button
            value={model.modelId}
            onClick={() => removeModel()}
            variant="outline-dark"
          >
            <FontAwesomeIcon
              style={{ height: "100%" }}
              className="fa-1x"
              icon={faTrash}
            />
          </Button>
        </Card.Title>
        {Object.entries(model.modelMetadata).map((element: any, index: number) => {
          const field = element[0];
          const type = element[1];
          return (
            <Card.Text>
              {field} : {type} : {model.modelId}
            </Card.Text>
          );
        })}
      </Card.Body>
    </Card>
  );
};

export default ModelCard;
