var http = require("http");

var server = http.createServer((req, res) => res.end("hello"));

server.listen("3100", () => {
  console.log("listening 3100");
});
