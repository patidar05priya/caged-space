'use strict';

module.exports.createEvent = (event, context, callback) => {

  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
    },
    body: JSON.stringify({
      message: 'Event Created'
    }),
  };

  callback(null, response);

};

module.exports.updateEvent = (event, context, callback) => {

  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
    },
    body: JSON.stringify({
      message: 'Event Updated'
    }),
  };

  callback(null, response);

};

module.exports.deleteEvent = (event, context, callback) => {

  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
    },
    body: JSON.stringify({
      message: 'Event Deleted'
    }),
  };

  callback(null, response);

};
