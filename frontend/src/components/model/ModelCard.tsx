import React from 'react'
import { Card } from 'react-bootstrap'

const ModelCard = ({model}:any) => {
    return (
        <Card>
        <Card.Body>
          <Card.Title>{model.modelName}</Card.Title>
          {/* {model.modelMetadata.map((key:string, value:string) => {
            <Card.Text>{key} : {value}</Card.Text>
          })} */}
        </Card.Body>
      </Card>
    )
}

export default ModelCard
