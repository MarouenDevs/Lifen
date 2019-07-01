import React, { Component } from "react";
import { connect } from "react-redux";
import DropFile from "../components/DropFile";
import ServerInfos from "../components/ServerInfos";
import { Alert } from "react-bootstrap";
import { dropFileAction, fetchInfosAction } from "../actions/file_actions";
import Loader from "react-loader-spinner";
import { toast } from "react-toastify";

let ipcRenderer = null;
if(window.require){

   ipcRenderer = window.require("electron").ipcRenderer;
}


const mapStateToProps = state => ({
  file: state.file,
  serverInfos: state.serverInfos
});
const mapDistpathToProps = dispatch => ({
  dropFile: file => dispatch(dropFileAction(file)),
  fetchInfos: () => dispatch(fetchInfosAction())
});

class FileDropZone extends Component {

  constructor(props){
    super(props);
    
  }
  componentWillMount() {
    this.props.fetchInfos();
  }

  componentDidMount(){
    if(ipcRenderer) {
      ipcRenderer.on('new_file' , (file)=> {
        console.log(file);
        // TO do issuer with ipcRenderer
       });
    }
    
  }
 
  onSetFile = file => {
    if (file.type !== "application/pdf") {
      toast.warn("File type should be pdf !", {
        position: toast.POSITION.TOP_CENTER
      });
    } else {
      if (file.size > 2000000) {
        toast.warn("Max file size 2 Mo!", {
          position: toast.POSITION.TOP_CENTER
        });
      } else {
        this.props.dropFile(file);
      }
    }
  };

  render() {
    const { file, serverInfos } = this.props;

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
        <DropFile
          onSetFile={this.onSetFile}
          file={serverInfos && serverInfos.entry ? serverInfos.entry[0] : {}}
        />
        <div className="row">
          <Alert variant="dark">File : {file.name}</Alert>
        </div>
        <ServerInfos serverInfos={serverInfos} />
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDistpathToProps
)(FileDropZone);
