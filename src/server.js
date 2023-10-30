const express = require('express');
const configExpress = require('./config/express');
//const db = require('./infra/database');
const { config } = require('./config');
const cors = require('cors');

async function startServer() {
  const app = express();
  app.use(cors());
  
  //await db.configDatabase();
  configExpress(app);
  
  app.listen(config.port, () => {
    console.log(`Server listening on port ${config.port} ${process.env.NODE_ENV}`);
  });
}

startServer();