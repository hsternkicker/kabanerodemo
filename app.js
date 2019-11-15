const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Hennings Tekton!");
});
 
module.exports.app = app;
