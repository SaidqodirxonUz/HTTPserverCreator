# HTTPserverCreator

## This library helps you to create a nodejs httpServer


### Download the library :
npm i httpservercreator

Define these modules in the library { HttpServer, ChildServer } :
const { HttpServer, ChildServer } = require("httpservercreator");


### Create a server:
const server = new HttpServer({ port: 8080 });



### Add a question:
server.get("/get", (req, res) => {
   res.writeHead(200, { "Content-Type": "application/json" });
   res.end("This was a GET request | You are at /get URL");
});

#### Attention, you can write post, delete, patch, post instead of get request :)


### Then you need to use the Server:
server.listen(() => {
   // console.log('HTTP server listening on port http://localhost:8080');
});


## To make a second server

### Create a server:
const server2 = new ChildServer(8081);

### Add a question:
server2.get("/", (req, res) => {
   res.writeHead(200, { "Content-Type": "application/json" });
   res.end(
     "Hello, World! | This Is GET request "
   );
});
#### Attention, you can write post, delete, patch, post instead of get request :)


### Then you need to use the Server:
server2.listen(() => {
   console.log("HTTP server listening on port http://localhost:8081");
});


### I recommend downloading it
### Hope you like it Thanks :)
