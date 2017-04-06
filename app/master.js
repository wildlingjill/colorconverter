function colorvertRGB(red, green, blue) {
	alert("Hello world - rgb to hex");
	console.log(typeof(red));
	// needs to be passed rgb or hex values, put into url for http request
	var url = "http://localhost:3000/rgbToHex?red=" + red + "&green=" + green + "&blue=" + blue;
	fetch(url).then(function(response){
		console.log(response);
	})
}

function colorvertHex(){
	alert("Hello world - hex to rgb");
	var url = "http://localhost:3000/hexToRgb?hex=00ff00";
	fetch(url).then(function(response){
		console.log(response);
	})

}
