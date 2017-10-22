var express = require('express');
var fs = require('fs');

var app = express();

app.get('/', function(req, res) {
    var indexFile = fs.readFileSync('./index.html');
    res.end(indexFile);
});

app.listen(3000);

console.log("Server listening on port 3000");