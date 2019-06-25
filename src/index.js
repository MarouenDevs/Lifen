import React from "react";
import ReactDOM from "react-dom";
import { Navbar } from "react-bootstrap";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" variant="light" bg="light">
        <Navbar.Brand href="#">Lifen</Navbar.Brand>
      </Navbar>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
