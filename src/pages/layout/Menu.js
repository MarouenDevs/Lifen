import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

class Menu extends Component {
  render() {
    return (
      <Navbar expand="lg" variant="light" bg="light">
        <Navbar.Brand href="#">Lifen</Navbar.Brand>
      </Navbar>
    );
  }
}

export default Menu;
