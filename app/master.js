
window.onload = function() {
	document.getElementById("rgbToHex").addEventListener("click", rgbToHex);

	function rgbToHex() {
		var red = document.getElementById("red").value;
		var green = document.getElementById("green").value;
		var blue = document.getElementById("blue").value;
		if (red === "" || green === "" || blue === ""){
			alert("Please fill in all fields!");
		} else if (red.length > 3 || green.length > 3 || blue.length > 3 ){
			alert("Please give valid RGB values!");
		} else if (red > 255 || green > 255 || blue > 255 ){
			alert("Please enter a value between 0 and 255!");
		} else {
			document.getElementById("color").style.backgroundColor="rgb(" + red + "," + green + "," + blue + ")";
			colorvertRGB(red, green, blue);
		}
	}

	document.getElementById("hexToRGB").addEventListener("click", hexToRGB);

	function hexToRGB() {
		var hex = document.getElementById("hex").value;
		var validHex  = /^[0-9A-F]{6}$/i.test(hex);
		console.log(hex);
		if (hex === ""){
			alert("Please enter a hex code!");
		} else if (hex.length < 6 || hex.length > 6) {
			alert("Please enter a 6 digit hex code!");
		} else if (!validHex) {
			alert("Please enter a valid hex code!");
		} else {
			document.getElementById("color").style.backgroundColor="#" + hex;
			colorvertHex(hex);
		}
	}


	function colorvertRGB(red, green, blue) {
		// needs to be passed rgb or hex values, put into url for http request
		var url = "http://localhost:3000/rgbToHex?red=" + red + "&green=" + green + "&blue=" + blue;
		fetch(url).then(function(response){
			response.text().then(function(text){
				console.log(text);
				document.getElementById("hex").value = text;
				var hexCode = "#";
				document.getElementById("colorvert").innerHTML = hexCode + text;
			})
		})
	}

	function colorvertHex(hex){
		var url = "http://localhost:3000/hexToRgb?hex=" + hex;
		fetch(url).then(function(response){
			response.text().then(function(text){
				var rgbString = text.slice(1, text.length-1);
				var rgbArray = rgbString.split(",");
				var redVal = rgbArray[0];
				var greenVal = rgbArray[1];
				var blueVal = rgbArray[2];
				document.getElementById("red").value = redVal;
				document.getElementById("green").value = greenVal;
				document.getElementById("blue").value = blueVal;
				var rgbCode = "rgb";
				document.getElementById("colorvert").innerHTML = "rgb(" + redVal + "," + greenVal + "," + blueVal + ")";
			})
		})
	}
}
