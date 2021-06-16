const http = require("http");
const fs = require('fs').promises;

// requests handle
let messages = [];

const requestListener = function (req, res) {
  if (req.url === "/") {
    fs.readFile(`${__dirname}/index.html`)
      .then((html_content) => {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(html_content);
        console.log(
          `Request: ${req.method}, ${req.url}.`
        );

      });
  } else if (req.url === "/msg" && req.method === "POST") {
    let data = "";
    req.once('data', chunk => {
      data += chunk;
    })
    req.once('end', () => {
      let new_msg = JSON.parse(data);
      messages.push(new_msg);
      console.log(`New msg added - { name: "${new_msg.name}", message: "${new_msg.message}" }.`);
      res.end();
    })
  } else if (req.url === "/msg" && req.method === "GET") {
    res.setHeader("Content-Type", "text");
    res.writeHead(200);
    res.end(JSON.stringify(messages));
  }
};

// creating server
const port = 8000;
const server = http.createServer(requestListener);
server.listen(port);