
// listen for a click on the form button
document.getElementById("rgbToHex").addEventListener("click", rgbToHex);


function rgbToHex() {

	// grab rgb values from form
	var red = document.getElementById("red").value;
	var green = document.getElementById("green").value;
	var blue = document.getElementById("blue").value;

	// check if fields are empty
	if (red === "" || green === "" || blue === ""){
		alert("Please fill in all fields!");
	// or if code length is over 3 digits or greater than 255
	} else if (red.length > 3 || green.length > 3 || blue.length > 3 ){
		alert("Please give valid RGB values!");
	} else if (red > 255 || green > 255 || blue > 255 ){
		alert("Please enter a value between 0 and 255!");
	} else {

		// change background of preview square to that color
		document.getElementById("color").style.backgroundColor="rgb(" + red + "," + green + "," + blue + ")";
		// call function to make http call
		colorvertRGB(red, green, blue);
	}
}


// listen for a click on the button
document.getElementById("hexToRGB").addEventListener("click", hexToRGB);

function hexToRGB() {
	// grab hex value from form
	var hex = document.getElementById("hex").value;

	// regex to check that it's a valid hex code - a-f/0-9
	var validHex  = /^[0-9A-F]{6}$/i.test(hex);

	// check if field is empty
	if (hex === ""){
		alert("Please enter a hex code!");
	// or if code length is wrong or invalid
	} else if (hex.length < 6 || hex.length > 6) {
		alert("Please enter a 6 digit hex code!");
	} else if (!validHex) {
		alert("Please enter a valid hex code!");
	} else {

		// change background of preview square to that color
		document.getElementById("color").style.backgroundColor="#" + hex;
		// call function to make http call
		colorvertHex(hex);
	}
}

// function to convert rgb to hex
function colorvertRGB(red, green, blue) {

	// fetch api needs to be passed rgb or hex values, put into url for http request
	// construct url for fetch call
	var url = "http://localhost:3000/rgbToHex?red=" + red + "&green=" + green + "&blue=" + blue;
	// use fetch to make http request
	fetch(url).then(function(response){
		// pull response out of returned object and pass into a callback
		response.text().then(function(text){

			// change html form to show the converted value
			document.getElementById("hex").value = text;
			// change result div to show converted value
			document.getElementById("colorvert").innerHTML = "#" + text;
		})
	})
}

// function to convert hex to rgb
function colorvertHex(hex){

	// construct url for fetch call
	var url = "http://localhost:3000/hexToRgb?hex=" + hex;
	// use fetch to make http request
	fetch(url).then(function(response){
		// pull response out of returned object and pass into a callback
		response.text().then(function(text){

			// parse json back into array
			var rgbArray = JSON.parse(text);

			// pull out rgb values from respective index of the array
			var redVal = rgbArray[0];
			var greenVal = rgbArray[1];
			var blueVal = rgbArray[2];

			// change each form field value to show the converted value
			document.getElementById("red").value = redVal;
			document.getElementById("green").value = greenVal;
			document.getElementById("blue").value = blueVal;
			// change  result div to show converted value
			document.getElementById("colorvert").innerHTML = "rgb(" + redVal + "," + greenVal + "," + blueVal + ")";
		})
	})
}
