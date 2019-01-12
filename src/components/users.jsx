import React, { Component } from "react";

class Users extends Component {
  state = {
    option1: [],
    option2: []
  };

  componentDidMount() {
    //call firebase to get current user data.
    //set state when updated
  }

  render() {
    const btnStyle = {
      borderWidth: "2px",
      borderColor: "black",
      color: "black"
    };
    return (
      <div
        style={{
          textAlign: "center",
          verticalAlign: "middle",
          display: "table-cell"
        }}
      >
        <h1 className="mb-4">Better School?</h1>
        <div style={{ textAlign: "center" }}>
          <div className="mb-4">
            <button
              className="btn m-2 btn-lg btn-outline-danger"
              style={btnStyle}
            >
              USC
            </button>
            <button
              className="btn m-2 btn-lg btn-outline-primary"
              style={btnStyle}
            >
              UCLA
            </button>
          </div>
        </div>
        <div>
          <img
            style={{ width: "100px" }}
            src={localStorage.getItem("userSnap")}
          />
        </div>
      </div>
    );
  }
}

export default Users;
