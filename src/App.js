import React, { useState, useEffect } from "react";
import Program from "./program";
import { Container, Navbar, Nav } from "react-bootstrap";
import Formular from "./formular";
import { Route, Switch, Link } from "react-router-dom";
import NotFound from "./notfound";

export default function App() {
  const [lista, setLista] = useState([]);
  const [cheie, setCheie] = useState(0);

  const getLista = () => {
    fetch("https://aplimob.net/agenda/evenimente.php")
      .then((rezultat) => rezultat.json()) // funcția "json()" extrage obiecte JavaSript din campul .text al ob.
      .then((listaev) => {
        setLista(listaev);
        setCheie(Math.random() * 1000);
      });
  };

  useEffect(() => {
    getLista();
  }, []);

  const stergElement = (id) => {
    const dateScript = JSON.stringify({ id: parseInt(id, 10) });
    const config = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: dateScript
    };
    //  Corectez in baza de date
    fetch("https://aplimob.net/agenda/evenimente.php", config).then(getLista());
  };

  const adaugElement = (el) => {
    const dateScript = JSON.stringify({
      dcalend: "2020-12-04",
      ora: el.ora,
      titlu: el.titlu,
      loc: el.loc,
      descriere: el.descriere
    });
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: dateScript
    };

    //  Corectez in baza de date
    fetch("https://aplimob.net/agenda/evenimente.php", config).then(getLista());
  };

  const stil = {
    container: { maxWidth: "700px" }
  };

  return (
    <Container style={stil.container}>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Program
            </Nav.Link>
            <Nav.Link as={Link} to="/formular">
              Formular
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <Program activitati={lista} sterge={stergElement} key={cheie} />
        </Route>
        <Route path="/formular">
          <Formular transmit={adaugElement} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Container>
  );
}
