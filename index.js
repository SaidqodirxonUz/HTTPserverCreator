const { HttpServer, ChildServer } = require("httpservercreator/httpservercreator/lib");

// const server = new HttpServer({ port: 8080 });
// server.get("/", (request, response) => {
//   response.end("Hello");
// });
// server.get("/ping", (request, response) => {
//   console.log(request.method);
//   console.log(request.url);

//   response.setHeader("Content-Type", "application/json");
//   response.end('{"message": "pong"}');
// });
// server.post("/", (request, response) => {
//   response.end("Foo");
// });
// server.listen(() => {
//   console.log("server 8000-portda ishlayapti");
// });

// const server2 = new ChildServer(8000);

const server2 = new HttpServer({ port: 8080 });
server2.get("/", (request, response) => {
  response.end("Hello");
});
server2.get("/ping", (request, response) => {
  console.log(request.method);
  console.log(request.url);

  response.setHeader("Content-Type", "application/json");
  response.end('{"message": "pong"}');
});
server2.post("/", (request, response) => {
  response.end("Foo");
});

server2.listen(() => {
  console.log("server2 3002 port runned ");
});
