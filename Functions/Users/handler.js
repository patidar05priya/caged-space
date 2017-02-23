'use strict';

module.exports.login = (event, context, callback) => {

  let credentials = JSON.parse(event.body);

  if (credentials.UserName == "preparedmusicfield@gmail.com" && credentials.Password == "studentPassword1") {

    let response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
      },
      body: JSON.stringify({
        id: 1,
        name: "Eric Sauda",
        email: "preparedmusicfield@gmail.com",
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

module.exports.createUser = (event, context, callback) => {

  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
    },
    body: JSON.stringify({
      message: 'User Created',
      data: event.body
    }),
  };

  callback(null, response);

};

module.exports.updateUser = (event, context, callback) => {

  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
    },
    body: JSON.stringify({
      message: 'User Updated',
      data: event.body
    }),
  };

  callback(null, response);

};

module.exports.deleteUser = (event, context, callback) => {

  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
    },
    body: JSON.stringify({
      message: 'User Deleted',
      data: event.body
    }),
  };

  callback(null, response);

};
