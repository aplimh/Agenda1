import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Formular = (props) => {
  const [ora, setOra] = useState("");
  const [titlu, setTitlu] = useState("");
  const [loc, setLoc] = useState("");
  const [descriere, setDescriere] = useState("");

  const stil = {
    h2: { textAlign: "center" }
  };

  const tratezSubmit = (evt) => {
    evt.preventDefault();
    const activitate = { ora, titlu, loc, descriere };
    props.transmit(activitate); //  Transmit spre App obiectul "activitate"
    //  Golesc controalele formularului
    setOra("");
    setTitlu("");
    setLoc("");
    setDescriere("");
  };

  return (
    <>
      <h2 className="mt-4" style={stil.h2}>
        Activitate nouă
      </h2>
      <hr />
      <Form onSubmit={tratezSubmit}>
        <Form.Group>
          <Form.Label>Ora:</Form.Label>
          <Form.Control
            type="text"
            value={ora}
            onChange={(e) => setOra(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Titlu:</Form.Label>
          <Form.Control
            type="text"
            value={titlu}
            onChange={(e) => setTitlu(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Loc:</Form.Label>
          <Form.Control
            type="text"
            value={loc}
            onChange={(e) => setLoc(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Descriere:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={descriere}
            onChange={(e) => setDescriere(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Formular;
