import React, { Component } from "react";

class Users extends Component {
  render() {
    return (
      <React.Fragment>
        <img src={localStorage.getItem("userSnap")}></img>
      </React.Fragment>
    );
  }
}

export default Users;
