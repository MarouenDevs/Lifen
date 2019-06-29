import React, { Component } from "react";
import { connect } from "react-redux";
import DropFile from "../components/DropFile";
import { Alert } from "react-bootstrap";
import { dropFileAction } from "../actions/file_actions";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";
const mapStateToProps = state => ({
  file: state.file
});
const mapDistpathToProps = dispatch => ({
  dropFile: file => dispatch(dropFileAction(file))
});

class FileDropZone extends Component {
  onSetFile = file => {
    this.props.dropFile(file);
  };

  render() {
    const { file } = this.props;

    if (file.status === "success") {
      toast.success("File uploaded !", {
        position: toast.POSITION.TOP_CENTER
      });
    }
    if (file.status === "fail") {
      toast.error("File upload failed !", {
        position: toast.POSITION.TOP_CENTER
      });
    }

    return (
      <>
        {file.status === "pending" ? (
          <div className="row">
            <center>
              <Loader type="ThreeDots" color="white" height={80} width={80} />
            </center>
          </div>
        ) : (
          ""
        )}
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
