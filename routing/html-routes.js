const path = require('path');




module.exports = function (app) {

    app.get('/notes', function (req, res) {
     res.sendFile(path.join(__dirname + 'NoteTaker/public/index.html'));
    });
  
    app.get('/', function (req, res) {
     res.sendFile(path.join(__dirname + 'NoteTaker/public/notes.html'));
    });
  
  };