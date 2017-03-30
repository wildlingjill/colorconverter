exports.rgbToHex = function(red, green, blue) {

	// converts incoming numbers to hexadecimal representation
	var redHex = red.toString(16);
	var greenHex = green.toString(16);
	var blueHex = blue.toString(16);

	return pad(redHex) + pad(greenHex) + pad(blueHex);
};

function pad(hex){
	// hex values must always be 2 digits long, so pad the converted value with a 0 at the start if only 1 digit long, e.g. 8 becomes "08"
	return (hex.length === 1 ? "0" + hex : hex);
};

exports.hexToRgb = function(hex) {

	// use parseInt with base 16 to convert the substrings of the hex value back into RGB values
	var red = parseInt(hex.substring(0, 2), 16);
	var green = parseInt(hex.substring(2, 4), 16);
	var blue = parseInt(hex.substring(4, 6), 16);

	return [red, green, blue];
}
