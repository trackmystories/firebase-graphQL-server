require("firebase/firestore");
const firebase = require("firebase/app");
require("firebase/auth");

var config = {
   apiKey: "",
   authDomain: "",
   databaseURL: "",
   projectId: "",
   storageBucket: "",
   messagingSenderId: "",
   appId: "",
   measurementId: ""
};

firebase.initializeApp(config);

module.exports = firebase;
