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
        <h1 className="center m-4" style={{ fontSize: "60px", color: "white" }}>
          SNAP-VOTE
        </h1>
        <div
          id="my-login-button-target"
          style={{ height: "50px", overflow: "hidden" }}
        />
      </div>
    );
  }
}

export default Home;
