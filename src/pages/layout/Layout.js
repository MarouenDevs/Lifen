import React, { Component } from "react";

import Menu from "./Menu";

class Layout extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <div className="container">{this.props.children}</div>
        <p className="copyRight">Copy Rights @ Marouen 2019</p>
      </div>
    );
  }
}

export default Layout;
