import React, { Component } from "react";
import firebase from 'firebase';
import { Redirect } from 'react-router-dom'

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

var nme = localStorage.getItem("userName");

console.log(nme);


class Users extends Component {
  state = {
    redirect: false
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/compare' />
    }
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
        {this.renderRedirect()}
        <button type="button" className="btn btn-md btn-info" onClick={this.setRedirect} style={{ position: "absolute", top: "10px", left: "10px" }}>Compare Bitmoji With Yourself!</button>
        <h1 className="mb-4">Better School?</h1>
        <div style={{ textAlign: "center" }}>
          <div className="mb-4">
            <button
              className="btn m-2 btn-lg btn-outline-danger"
              style={btnStyle}
              onClick={() => {
                data.ref('usc/').update({
                  [nme]: {
                    name: localStorage.getItem("userName"),
                    profile_picture: localStorage.getItem("userSnap"),
                  }
                });
                test();

              }}
            >
              USC
            </button>
            <button
              className="btn m-2 btn-lg btn-outline-primary"
              style={btnStyle}
              onClick={() => {
                data.ref('ucla/').update({
                  [nme]: {
                    name: localStorage.getItem("userName"),
                    profile_picture: localStorage.getItem("userSnap"),
                  }
                });

                window.location.replace("http://localhost:3000/voted");


              }}
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

function test() {

  window.alert("NICEEEEEEEEE");



}

export default Users;
