console.log("connected");

// API Key: de8f5e132e9b616490b4cbe6e13adb30

// https://api.openweathermap.org/data/2.5/weather?q={your city here}&appid=de8f5e132e9b616490b4cbe6e13adb30

// part 1/base url: 
// https://api.openweathermap.org/data/2.5/weather?q=

// part 2/variable: 
// {your city} -- use %20 instead of space

// part 3/API key: 
// &appid=de8f5e132e9b616490b4cbe6e13adb30


var myReq = $.get('https://api.openweathermap.org/data/2.5/weather?q=San%20Mateo&appid=de8f5e132e9b616490b4cbe6e13adb30');


myReq.done(
	function(data) {
		for(i = 0; i < data.length; i++) {
		console.log(data);
		// console.log(data[0].login);
		// console.log(data[i].login);
		}

	}
	)

document.getElementById('myBtn').addEventListener('click', function(){

// ajax uses an object inside a function
	$.ajax({
		url: "https://api.openweathermap.org/data/2.5/weather?q=San%20Mateo&appid=de8f5e132e9b616490b4cbe6e13adb30",
		dataType: "json",
		success: function(data) {
// anything you need to do you write within this function
			// this first line displays the first log in name
			// document.body.innerHTML = data[0].login
			console.log(data);
		},

		type: "GET"
	})

})



// JavaScript method
// create an API object and request
let myRequest = new XMLHttpRequest();
// call the function
// .open(method, url, async)
myRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=San%20Mateo&appid=de8f5e132e9b616490b4cbe6e13adb30', true);

myRequest.onload = function(data){
	// 200 means everything is ok and data can be retrieved
	if(this.status === 200){
		var mydata = JSON.parse(this.response);

// display all of the names
		for(i = 0; i < mydata.length; i++){
		// document.body.innerHTML += "<h3>" + mydata + "</h3>";
		}
	document.body.innerHTML += "<h3>" + mydata.name + "</h3>";
// index of weather used bc object of weather contains an array, use index to access items in an array inside of an object
	document.body.innerHTML += "<h3>" + mydata.weather[0].description + "</h3>";
	document.body.innerHTML += "<h3>" + mydata.main.temp + "</h3>";
	document.body.innerHTML += "<h3>" + mydata.main.humidity + "</h3>";
	
	// console.log(mydata);
}
}
// send request to the server
myRequest.send();