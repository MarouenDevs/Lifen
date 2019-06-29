import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import Menu from "./Menu";
import "react-toastify/dist/ReactToastify.css";

class Layout extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <div className="container">{this.props.children}</div>
        <p className="copyRight">Copy Rights @ Marouen 2019</p>
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}

export default Layout;
