import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div
        style={{
          textAlign: "center",
          verticalAlign: "middle",
          display: "table-cell"
        }}
      >
        <h1 className="center m-4" style={{ fontSize: "40px", color: "white" }}>
          SNAP-VOTE
        </h1>
        <div id="my-login-button-target" />
      </div>
    );
  }
}

export default Home;
