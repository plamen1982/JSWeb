const http = require("http");
const url = require("url");
const handlers = require("./handlers/handlerBlender");
const db = require("./config/dataBase");
const port = 2323;

db.load()
.then((data) => {
  data.forEach((itemData, index) => {
    console.log(`Object #${index} is loaded with the next content`);
    console.log(itemData);
  })
  http
  .createServer((req, res) => {
    handlers.forEach(handler => {
      req.pathname = url.parse(req.url).pathname;
      const task = handler(req, res);
      if (task !== true) {
        return;
      }
    });
  })
  .listen(port);
console.log(`Im listening on ${port}`);
}).catch(err => {
  console.log('The db.json file could not be loaded');
});

