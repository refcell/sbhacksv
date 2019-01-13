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
var num = 0;







class Users extends Component {
  componentDidMount() {
            console.log('yo');
            var ref = data.ref("usc").orderByKey();
            ref.once("value")
            .then(function(snapshot){
              console.log('yo2');
              snapshot.forEach(function(childSnapshot){
                var key = childSnapshot.key;
                var childData = childSnapshot.val();
                
                var src = childData.profile_picture;
                console.log(src);

                var img = document.createElement("img");
                img.src = src;
                document.body.appendChild(img);

                localStorage.setItem(num, src);
                num++;
              });
            });
//   ref.child("snap-vote-77029/usc").once("value").then(function(snapshot) {
//     for (var key in snapshot.val()) {
//         console.log(key);   
// }

// });




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
            src={localStorage.getItem(num)}
          />
        
        </div>
      


    );

  }
}

export default Users;
