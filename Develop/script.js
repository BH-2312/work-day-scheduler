var currentDay = document.getElementById("currentDay");
currentDay.innerHTML = moment().format("MMM Do YYYY"); 
var hour = document.getElementById("hour");

//$("currentDay").text = moment().format("MMM Do YYYY");
//var currentHour = document.getElementById("test");
//currentHour.innerHTML = moment().format('H');
var hourObject = moment().format('H');
var hourString = JSON.stringify(hourObject);
var hourInteger = parseInt(hourString);

console.log(typeof(hourInteger));

if (hourInteger==hour) {
    
}
