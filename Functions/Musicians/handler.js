'use strict';

var firebase = require("firebase");

module.exports.login = (event, context, callback) => {

  let credentials = JSON.parse(event.body);

  if (credentials.UserName == "musician@gmail.com" && credentials.Password == "musicianPassword1") {

    let response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
      },
      body: JSON.stringify({
        id: 1,
        name: "Musician",
        email: "musician@gmail.com",
        isLoggedIn: true
      }),
    };

    callback(null, response);

  } else {

        let response = {
      statusCode: 404,
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
      },
      body: JSON.stringify({
        error: "User Not Found."
      }),
    };

    callback(null, response);

  }

};

module.exports.addMusician = (event, context, callback) => {

  context.callbackWaitsForEmptyEventLoop = false;  //<---Important

  // Initialize Firebase
  initializeFirebase();

  let newKey = firebase.database().ref('musicians').push().key;

  var updates = {};
  updates['/musicians/' + newKey] = JSON.parse(event.body);

  firebase.database().ref().update(updates).then(function () {

    firebase.database().ref('musicians/' + newKey).once('value').then(function (snapshot) {

      let musician = snapshot.val();
      musician.id = newKey;

      const response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*", // Required for CORS support to work
          "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
        },
        body: JSON.stringify({
          message: 'Musician Created',
          data: musician
        })
      };

      callback(null, response);

    });

  });

};

module.exports.updateMusician = (event, context, callback) => {

  context.callbackWaitsForEmptyEventLoop = false;  //<---Important

  // Initialize Firebase
  initializeFirebase();

  let key = JSON.parse(event.body).id;

  var updates = {};
  updates['/musicians/' + key] = JSON.parse(event.body);

  firebase.database().ref().update(updates).then(function () {

    firebase.database().ref('musicians/' + key).once('value').then(function (snapshot) {

      let musician = snapshot.val();
      musician.id = key;

      const response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*", // Required for CORS support to work
          "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
        },
        body: JSON.stringify({
          message: 'Musician Updated',
          data: musician
        })
      };

      callback(null, response);

    });

  });

};

let initializeFirebase = function () {

  let firebaseConfig = {
    apiKey: "AIzaSyAgvU-ZNdAMYJaw_kTK-uyWMIGHwCZtmMM",
    authDomain: "cagedspace-9d75f.firebaseapp.com",
    databaseURL: "https://cagedspace-9d75f.firebaseio.com",
    storageBucket: "cagedspace-9d75f.appspot.com",
    messagingSenderId: "464147072174"
  };

  if (firebase.apps.length == 0) {   // <---Important!!! In lambda, it will cause double initialization.

    firebase.initializeApp(firebaseConfig);

  }

} 
