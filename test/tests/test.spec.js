// const axios = require("axios");
// const { expect } = require('chai');
const { sendRequest } = require('../helpers/api.helper');
const testData = require('../config/data.json');

describe('API Test Suite', () => {

  it("GET (post/1)", async () => {
    const response = await sendRequest("posts/1");

    // const response = await axios({
    //   url: "https://jsonplaceholder.typicode.com/posts/1",
    //   method: "get"
    // });
    console.log("\n");
    console.log("Sent GET method request...");
    console.log("Status:");
    console.log(response.status);
    expect(response.status).to.equal(200);

    console.log("Body response:")
    console.log(response.data);
    expect(response.data.userId).to.equal(1);
  });

  it("POST (posts)", async () => {
    const response = await sendRequest("posts", testData, "post");

    // const response = await axios({
    //   method: "post",
    //   url: "https://jsonplaceholder.typicode.com/posts",
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8'
    //   },
    //   data: {
    //     title: "foo",
    //     body: "bar",
    //     userId: 1,
    //   },
    // });
    console.log("\n");
    console.log("Sent POST method request...");
    console.log("Status:");
    console.log(response.status);
    expect(response.status).to.equal(201);

    console.log("Body response:");
    console.log(response.data);
  });
});
