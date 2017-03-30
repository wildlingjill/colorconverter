var expect = require("chai").expect;
// request makes HTTP requests
var request = require("request");

// description of the functionality we want to test
describe("Color Code Converter API", function() {

	describe("RGB to Hex conversion", function() {

		// store the full path to the resource we want to test in a variable, run server on port 3000 - in a bigger test suite would probably store the host part of the url in a global variable to reuse
		var url = "http://localhost:3000/rgbToHex?red=255&green=255&blue=255";

		it("returns status 200", function(done) {
			// request package makes the http call to the url, takes two arguments - a url to visit and a function to be invoked when the request is completed. set up expectations inside callback function
			request(url, function(error, response, body){
				expect(response.statusCode).to.equal(200);
				// done callback function tells mocha that the above callback is async and it needs to wait for the response value before it checks the expectations
				done();
			});
		});

		it("returns the color in hex", function(done) {
			request(url, function(error, response, body){
				expect(body).to.equal("ffffff");
				done();
			})
		});

	});

	describe("Hex to RGB conversion", function() {

		var url = "http://localhost:3000/hexToRgb?hex=00ff00";

		it("returns status 200", function(done) {
			request(url, function(error, response, body){
				expect(response.statusCode).to.equal(200);
				done();
			});
		});

		it("returns the color in RGB", function(done) {
			request(url, function(error, response, body){
				expect(body).to.equal("[0,255,0]");
				done();
			});
		});

	});
});
