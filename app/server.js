var http = require("http");
var path = require("path");
var express = require("express");
var app = express();
var converter = require("./converter");

app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "./", "index.html"));
})

app.use('/static', express.static(path.join(__dirname, '../app')));

app.get("/rgbToHex", function(req, res){

	var red = parseInt(req.query.red, 10);
	var green = parseInt(req.query.green, 10);
	var blue = parseInt(req.query.blue, 10);

	var hex = converter.rgbToHex(red, green, blue);

	res.send(hex);

});

app.get("/hexToRgb", function(req, res){

	var hex = req.query.hex;

	var rgb = converter.hexToRgb(hex);

	// rgb is array, has to be string so stringify it
	res.send(JSON.stringify(rgb));

});

app.listen(3000);
