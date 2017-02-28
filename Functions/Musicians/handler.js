'use strict';

module.exports.getMusicians = (event, context, callback) => {

  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
    },
    body: JSON.stringify({
      data: [
        { id: 1, name: 'Superman', description: 'test description', instrument: 'Guitar' },
        { id: 2, name: 'Batman', description: 'test description', instrument: 'Cello' },
        { id: 5, name: 'BatGirl', description: 'test description', instrument: 'Piano' },
        { id: 3, name: 'Robin', description: 'test description', instrument: 'Violin' },
        { id: 4, name: 'Flash', description: 'test description', instrument: 'Violin' }
      ]
    }),
  };

  callback(null, response);

};
