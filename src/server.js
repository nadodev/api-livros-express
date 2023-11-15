const express = require('express');
const router = require('./routes/Router');
const database = require('./config/db');
class Server {
  constructor() {
    this.app = express();
    this.setup();
    database.connect();
  }

  setup() {
    this.app.use(express.static('public'));
    this.app.use(express.json());
    this.app.use(router);
  }

  start(port = 3000) {
    this.app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  }
}

module.exports = Server;
