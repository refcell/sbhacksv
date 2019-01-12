import React, { Component } from "react";
import firebase from 'firebase';


const config = {
      apiKey: "AIzaSyCbRZwXF2eXe2DpLNeWBDW8N4I8WDOVge8",
      authDomain: "snap-vote-77029.firebaseapp.com",
      databaseURL: "https://snap-vote-77029.firebaseio.com",
      projectId: "snap-vote-77029",
      storageBucket: "snap-vote-77029.appspot.com",
      messagingSenderId: "332977921881"
};

firebase.initializeApp(config);

var data = firebase.database();


class Users extends Component {
  componentDidMount() {}

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
              onClick={() => { firebase.database().ref('users/').set({
                name: "kitty",
                profile_picture : "goes meow"
  });}}
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
