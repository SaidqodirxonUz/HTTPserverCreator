const { HttpServer, ChildServer } = require("httpservercreator");

// const server = new HttpServer({ port: 8080 });

// server.get("/", (req, res) => {
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.end("Hello, World! | Bu GET request edi Siz Asosiy URL dasiz");
// });

// server.get("/get", (req, res) => {
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.end("Bu GET request edi | Siz /get URL dasiz");
// });

// server.post("/post", (req, res) => {
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.end("Bu POST request edi | Siz /post URL dasiz");
// });

// server.put("/put", (req, res) => {
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.end("Bu PUT request edi | Siz /put URL dasiz");
// });

// server.patch("/patch", (req, res) => {
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.end("Bu PATCH request edi | Siz /patch URL dasiz");
// });

// server.delete("/delete", (req, res) => {
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.end("Bu DELETE request edi | Siz /delete URL dasiz");
// });

// ///////////////////

// server.listen(() => {
//   //   console.log('HTTP server listening on port http://localhost:8080');
// });

///////////////////

const server2 = new ChildServer(8081);

server2.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    "Hello, World! | Bu GET request edi Siz Asosiy URL dasiz va Siz CHILD_SERVER dasiz"
  );
});

server2.get("/get", (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end("Bu GET request edi | Siz /get URL dasiz | Siz CHILD_SERVER dasiz");
});

server2.post("/post", (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end("Bu POST request edi | Siz /post URL dasiz | Siz CHILD_SERVER dasiz");
});

server2.put("/put", (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    "Bu PATCH request edi | Siz /patch URL dasiz | Siz CHILD_SERVER dasiz"
  );
});

server2.patch("/patch", (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    "Bu PATCH request edi | Siz /patch URL dasiz | Siz CHILD_SERVER dasiz"
  );
});

server2.delete("/delete", (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    "Bu DELETE request edi | Siz /delete URL dasiz | Siz CHILD_SERVER dasiz"
  );
});

///////////////

server2.listen(() => {
  console.log("HTTP server listening on port http://localhost:8081");
});
