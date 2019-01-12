import firebase from "firebase";
var config = {
  apiKey: "AIzaSyDDyQI8taLtimUEchWkh5RqVli2kB6ZzyM",
  authDomain: "snap-vote.firebaseapp.com",
  databaseURL: "https://snap-vote.firebaseio.com",
  projectId: "snap-vote",
  storageBucket: "snap-vote.appspot.com",
  messagingSenderId: "823328701299"
};
firebase.initializeApp(config);
export default firebase;
