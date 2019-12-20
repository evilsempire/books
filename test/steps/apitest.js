const app = require("../../index"); //import app
const { defineSupportCode, AfterAll, BeforeAll } = require("cucumber");

const assert = require("assert");
const request = require("request");
const uuid4 = require("uuid");

let BaseUrl = "http://localhost:" + process.env.PORT;
let server;
BeforeAll(() => {
  let PORT = process.env.PORT || 3000;

  server = app.listen(PORT, () => {
    console.log("Listening...");
  });
});
defineSupportCode(function({ When, Then }) {
  let data, postResponse;

  //START == get request
  When("I make a GET request to {string}", function(url, callback) {
    request(
      {
        url: BaseUrl + url
      },
      (err, response, body) => {
        if (err) {
          callback(err);
        } else {
          let response = JSON.parse(body);
          data = response.hasOwnProperty("data") ? response.data[0] : [];
          callback(null, false);
        }
      }
    );
  });

  Then("The response property {string} should be {string}", function(
    column,
    value
  ) {
    assert.equal(value, data[column]);
  });

  //END == get request

  //START == post request

  When(
    "I make a POST request to {string} with variables as {string} {string} {string}",
    function(url, name, auther, content, callback) {
      request(
        {
          url: BaseUrl + url,
          method: "POST",
          json: {
            id: uuid4(),
            name: name,
            auther: auther,
            content: content
          }
        },
        (err, response, body) => {
          if (err) {
            callback(err);
          } else {
            postResponse = body.message;
            callback(null, false);
          }
        }
      );
    }
  );

  Then("Should get a message {string}", function(message) {
    assert.equal(message, postResponse);
  });

  //END == post request
});

AfterAll(() => {
  server.close();
});
