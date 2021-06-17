import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ListGroup, Row, Col, Button } from "react-bootstrap";
import { useAppDispatch } from "../../redux/hooks";
import { deleteModel } from "../../redux/projectAppSlice";

const ModelCard = ({ model }: any) => {
  const dispatch = useAppDispatch();

  const removeModel = () => {
    const body = { params: { modelId: model.modelId } };
    dispatch(deleteModel(body));
  };

  return (
    <>
      <ListGroup.Item className="project-list-item">
        <Row>
          <h5>
            {model.modelName}
          </h5>
          <Col className="project-name">{
            Object.entries(model.modelMetadata).map((element: any, index: number) => {
              const field = element[0];
              const type = element[1];
              return (
                <p>
                  {field} : {type}
                </p>
              );
            })
          }</Col>

          <Col>
            <span className="float-right">
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
            </span>
          </Col>
        </Row>
      </ListGroup.Item>
      <br></br>
    </>
    // <Card>
    //   <Card.Body>
    //     <Card.Title>
    //       {model.modelName}
    // <Button
    //   value={model.modelId}
    //   onClick={() => removeModel()}
    //   variant="outline-dark"
    // >
    //   <FontAwesomeIcon
    //     style={{ height: "100%" }}
    //     className="fa-1x"
    //     icon={faTrash}
    //   />
    // </Button>
    //     </Card.Title>
    // {Object.entries(model.modelMetadata).map((element: any, index: number) => {
    //   const field = element[0];
    //   const type = element[1];
    //   return (
    //     <Card.Text>
    //       {field} : {type}
    //     </Card.Text>
    //   );
    // })}
    //   </Card.Body>
    // </Card>
  );
};

export default ModelCard;
