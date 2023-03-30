import { Card,CardBody,CardTitle,CardText,CardHeader } from 'reactstrap';
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Text(props) {
    const { datatext } = props;
  
return (
    <>
  <Card
    className="my-2"
    color="primary"
    inverse
    style={{
      width: '18rem'
    }}
  >
    <CardHeader>
    2022-08-21
    </CardHeader>
    <CardBody>
      <CardTitle tag="h5">
        Special Title Treatment
      </CardTitle>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
    </CardBody>
  </Card>
  <Card
    className="my-2"
    color="secondary"
    inverse
    style={{
      width: '18rem'
    }}
    ></Card>
    </>
);

}