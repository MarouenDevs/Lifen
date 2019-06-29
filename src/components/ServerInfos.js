import React from "react";

import { Card } from "react-bootstrap";

import Loader from "react-loader-spinner";

const ServerInfos = props => {
  return (
    <Card style={{ width: "28rem", color: "black" }}>
      {props.serverInfos.status === "pending" ? (
        <div className="row">
          <center>
            <Loader type="ThreeDots" color="black" height={80} width={80} />
          </center>
        </div>
      ) : (
        <Card.Body>
          <Card.Title>Server Information:</Card.Title>
          <Card.Text>Files count: {props.serverInfos.total}</Card.Text>
          <Card.Text>
            last Updated:{" "}
            {props.serverInfos.meta && props.serverInfos.meta.lastUpdated}
          </Card.Text>
        </Card.Body>
      )}
    </Card>
  );
};
export default ServerInfos;
