const serverless = require("serverless-http"); //serverless-http
const app = require("index"); //import app

module.exports.handler = serverless(app);
