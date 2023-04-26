const http = require('http');
const { spawn } = require('child_process');

class HttpServer {
  constructor(port) {
    this.port = port;
    this.routes = {};
    this.server = http.createServer((req, res) => {
      if (this.routes[req.url] && this.routes[req.url][req.method]) {
        this.routes[req.url][req.method](req, res);
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end('Not Found');
      }
    });
  }


  listen(port,callback) {
      this.server.listen(this.port, () => {
    if (!port(typeof"number")) {
    this.port = port
  }else{
        this.port = port
  }
      if (callback) {
        callback();
      }
    });
  }

  get(url, handler) {
    this.addRoute('GET', url, handler);
  }

  post(url, handler) {
    this.addRoute('POST', url, handler);
  }

  put(url, handler) {
    this.addRoute('PUT', url, handler);
  }
  
  patch(url, handler) {
    this.addRoute('PATCH', url, handler);
  }
  
  delete(url, handler) {
    this.addRoute('DELETE', url, handler);
  }



  addRoute(method, url, handler) {
    if (!this.routes[url]) {
      this.routes[url] = {};
    }
    this.routes[url][method] = handler;
  }
}

class ChildServer extends HttpServer {
  constructor(port, command, args) {
    super(port);
    this.command = command;
    this.args = args;
  }

  runCommand(req, res) {
    const child = spawn(this.command, this.args);
    let output = '';

    child.stdout.on('data', (data) => {
      output += data.toString();
    });

    child.stderr.on('data', (data) => {
      output += data.toString();
    });

    child.on('close', (code) => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(output);
    });
  }
}

module.exports = { HttpServer, ChildServer };
