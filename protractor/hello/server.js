'use strict';
var express = require('express');

var app = express();
app.use(express.static(__dirname));

var PORT = 3000;
app.listen(PORT);
console.log('listening on', PORT);