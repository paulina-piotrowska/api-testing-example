const { sendRequest } = require('../helpers/api.helper');
const testDataPosts = require('../config/data.posts.json');
const testDataAlbums = require('../config/data.albums.json');
const testDataUsers = require('../config/data.users.json');
const { expect } = require('chai');

describe('API Test Suite', () => {

  it("GET (post/1)", async () => {
    const response = await sendRequest("posts/1");

    // const response = await axios({
    //   url: "https://jsonplaceholder.typicode.com/posts/1",
    //   method: "get"
    // });

    console.log("\n");
    console.log('Sent GET method request to "post/1" endpoint...');
    console.log("Status:");
    console.log(response.status);
    expect(response.status).to.equal(200);

    console.log("Body response:")
    console.log(response.data);
    expect(response.data.userId).to.equal(1);
  });

  it("POST (posts)", async () => {
    const response = await sendRequest("posts", testDataPosts, "post");

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
    console.log('Sent POST method request to "posts" endpoint...');
    console.log("Status:");
    console.log(response.status);
    expect(response.status).to.equal(201);

    console.log("Body response:");
    console.log(response.data);
    expect(response.data.body).to.equal("bar");
  });

  // Homework
  // 1. Create a resource (using post() method):
  it("POST (albums)", async () => {
    const response = await sendRequest("albums", testDataAlbums, "post");

    console.log("\n");
    console.log('Sent POST method request to "albums" endpoint...');
    console.log("Status:");
    console.log(response.status);
    expect(response.status).to.equal(201);

    console.log("Body response:");
    console.log(response.data);
    expect(response.data.title).to.equal("enim repellat iste, est quod aut");
  });

  // 2. Read (using get() method) -> list all resources:
  it("GET (comments)", async () => {
    const response = await sendRequest("comments");
    console.log("\n");
    console.log('Sent GET method request to "comments" endpoint...');
    console.log("Status:");
    console.log(response.status);
    expect(response.status).to.equal(200);

    console.log("Body response:")
    console.log(response.data);
    expect(response.data.length).to.eql(500);
  });

  // 3. Read (using get() method) -> get a resource:
  it("GET (photos/2)", async () => {
    const response = await sendRequest("photos/2");
    console.log("\n");
    console.log('Sent GET method request to "photos/2" endpoint...');
    console.log("Status:");
    console.log(response.status);
    expect(response.status).to.equal(200);

    console.log("Body response:")
    console.log(response.data);
    expect(response.data.url).to.equal("https://via.placeholder.com/600/771796");
  });

  // 4. Read (using get() method) -> filter resources:
  it("GET (photos?albumId=1)", async () => {
    const response = await sendRequest("photos?albumId=1");
    console.log("\n");
    console.log('Sent GET method request to "photos?albumId=1" endpoint...');
    console.log("Status:");
    console.log(response.status);
    expect(response.status).to.equal(200);

    console.log("Body response:")
    console.log(response.data);
    expect(response.data.length).to.eql(50);
  });

  // 5. Update a resource (using put() method):
  it("PUT (users/1)", async () => {
    const response = await sendRequest("users/1", testDataUsers, "put");

    console.log("\n");
    console.log('Sent PUT method request to "users/1" endpoint...');
    console.log("Status:");
    console.log(response.status);
    expect(response.status).to.equal(200);
    console.log("Body response:");
    console.log(response.data);
    expect(response.data.address.street).to.equal("Kulas Light Aura");
  });

  // 6. Delete a resource (using delete() method):
  it("DELETE (todos/1)", async () => {
    const response = await sendRequest("todos/1", null, "delete");
    console.log("\n");
    console.log('Sent DELETE method request to "todos/1" endpoint...');
    console.log("Status:");
    console.log(response.status);
    expect(response.status).to.equal(200);
  });
});
