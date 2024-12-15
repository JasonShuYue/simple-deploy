const http = require("http");
const fs = require("fs");
const fsp = require("fs/promises");

// const http = fs.readFileSync("./index.html");

const server = http.createServer(async (request, response) => {
  const status = await fs.promises.stat("./index.html");
  console.log("status:", status);
  response.setHeader("content-length", status.size);

  fs.createReadStream("./index.html").pipe(response);
});

server.listen("3000");
