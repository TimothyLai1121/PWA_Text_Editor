const path = require('path');

module.exports = (app) =>
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../../client/dist/index.html')) // Messed up last attempt, will change it into ../../client/dist/index.html
  );
