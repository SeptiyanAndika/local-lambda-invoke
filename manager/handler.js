"use strict";

const AWS = require("aws-sdk");

const endpoint = "http://localhost:4000/";
const lambda = new AWS.Lambda({ region: "us-west-2", endpoint });

module.exports.invoke = (event, context, callback) => {
  const params = {
    FunctionName: "services-dev-hello",
    Payload: JSON.stringify({
      valA: 1,
      valB: 2
    })
  };
  lambda.invoke(params, (err, result) => {
    if (err) {
      return callback(err);
    }

    callback(null, {
      statusCode: 200,
      body: result.Payload
    });
  });

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
