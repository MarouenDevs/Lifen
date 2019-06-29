import React from "react";
import FileDrop from "react-file-drop";
import PropTypes from "prop-types";
class DropFile extends React.Component {
  handleDrop = files => {
    this.props.onSetFile(files[0]);
  };

  render() {
    return (
      <div id="react-file-drop-demo">
        <FileDrop onDrop={this.handleDrop}>Drop some files here!</FileDrop>
      </div>
    );
  }
}
DropFile.propTypes = {
  onSetFile: PropTypes.func
};
export default DropFile;
