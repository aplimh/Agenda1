import React from "react";
import { Button, Row, Col } from "react-bootstrap";

const Activitate = (props) => {
  const { ora, titlu, loc, descriere, id, sterge } = props;

  return (
    <>
      <h4>
        {ora} - {titlu}
      </h4>
      <Row>
        <Col sm={10}>
          <h6>Locul: {loc}</h6>
        </Col>
        <Col sm={2}>
          <Button variant="primary" id={id} onClick={() => sterge(id)}>
            Sterge
          </Button>
        </Col>
      </Row>
      <p>{descriere}</p>
      <hr />
    </>
  );
};

export default Activitate;
