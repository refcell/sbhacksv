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



var data = firebase.database();




class Users extends Component {
  componentDidMount() {

            var ref = data.ref("snap-vote-77029");
            ref.once("value")
  ref.child("snap-vote-77029/usc").once("value").then(function(snapshot) {
    for (var key in snapshot.val()) {
    console.log("ddd");
      for (var key2 in snapshot.val()[key]) {
      

      }
    
}

});

UCRef.on('value', snapshot => {
      this.setState({usercount: snapshot.val()});
    });

firebase.database().ref('snap-vote-77029/').once('value', function (snapshot) {
        console.log(snapshot.val())
    });

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

      

    

          <img
            style={{ width: "100px" }}
            src={localStorage.getItem("userSnap")}
          />
        </div>
      


    );

  }
}

export default Users;
