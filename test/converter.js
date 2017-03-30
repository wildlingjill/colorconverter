// require chai library to use the expect keyword
var expect = require("chai").expect;
var converter = require("../app/converter");

// describe function from mocha allows you to encapsulate expectations: first argument is a string that describes the feature, second is a function that represents the body of the description
describe("Color Code Converter", function(){

	// nested describes allow us to describe segments of the features
	describe("RGB to Hex conversion", function(){
		// it functions allow us to describe the expectations of the feature
		it("converts the basic colors", function(){
			var redHex = converter.rgbToHex(255, 0, 0);
			var greenHex = converter.rgbToHex(0, 255, 0);
			var blueHex = converter.rgbToHex(0, 0, 255);

			// use the Chai expect keyword to compare the result of our feature's implementation with the one we expect to get
			expect(redHex).to.equal("ff0000");
			expect(greenHex).to.equal("00ff00");
			expect(blueHex).to.equal("0000ff");
		});
	});

	describe("Hex to RGB conversion", function(){
		it("converts the basic colors", function(){
			var red = converter.hexToRgb("ff0000");
			var green = converter.hexToRgb("00ff00");
			var blue = converter.hexToRgb("0000ff");

			// to.deep.equal is a matcher - matches the result of a feature against an expected value. to check the equality of two simple objects can do 'expect(1+1).to.equal(2)', but for the values below we're comparing nested objects, so .deep tells Chai to match the elements of the array one by one
			expect(red).to.deep.equal([255, 0, 0]);
			expect(green).to.deep.equal([0, 255, 0]);
			expect(blue).to.deep.equal([0, 0, 255]);
		});
	});
});
