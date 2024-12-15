const http = require("http");

const fs = require("fs");

const html = fs.readFileSync("./index.html");

const server = http.createServer((request, response) => {
  response.end(html);
});

server.listen("3000", () => {
  console.log('listening 3000, fs')
})

