import React, { Component } from "react";
import { connect } from "react-redux";
import DropFile from "../components/DropFile";
import { Alert } from "react-bootstrap";
import { dropFileAction } from "../actions/file_actions";
const mapStateToProps = state => ({
  file: state.file
});
const mapDistpathToProps = dispatch => ({
  dropFile: file => dispatch(dropFileAction(file))
});

class FileDropZone extends Component {
  onSetFile = file => {
    this.props.dropFile({ name: file.name });
  };

  render() {
    const { file } = this.props;
    return (
      <>
        <DropFile onSetFile={this.onSetFile} />

        <div className="row">
          <Alert variant="dark">File : {file.name}</Alert>
        </div>
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDistpathToProps
)(FileDropZone);
