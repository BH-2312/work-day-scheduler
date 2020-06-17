var currentDay = document.getElementById("currentDay");
currentDay.innerHTML = moment().format("MMM Do YYYY");
var hour = document.getElementById("hour");
var nineAM = document.getElementById("9AM");
//$("currentDay").text = moment().format("MMM Do YYYY");
//var currentHour = document.getElementById("test");
//currentHour.innerHTML = moment().format('H');
var hourString = moment().format('H');
//var correctHour = new Date().getHours();
//var hourString = JSON.stringify(hourObject);
var hourInteger = parseInt(hourString);


//console.log(parseInt(hourObject)===21);
//console.log(correctHour)
console.log(hour)
console.log(typeof (hourString));
console.log(hourString);
console.log(typeof (hourInteger));
console.log(hourInteger === 21);

//running of functions
nineAm();
tenAm();
elevenAm();
twelvePm();
onePm();
twoPm();
threePm();
fourPm();
fivePm();


//functions to determine correct hour and correct colour of scheduler
function nineAm() {
    if (hourInteger === 9) {
        $("#9AM").addClass("present");
    }
    if (hourInteger < 9) {
        $("#9AM").addClass("future");
    }
    if (hourInteger > 9) {
        $("#9AM").addClass("past");
    }
}
function tenAm() {
    if (hourInteger === 10) {
        $("#10AM").addClass("present");
    }
    if (hourInteger < 10) {
        $("#10AM").addClass("future");
    }
    if (hourInteger > 10) {
        $("#10AM").addClass("past");
    }
}
function elevenAm() {
    if (hourInteger === 11) {
        $("#11AM").addClass("present");
    }
    if (hourInteger < 11) {
        $("#11AM").addClass("future");
    }
    if (hourInteger > 11) {
        $("#11AM").addClass("past");
    }  
}
function twelvePm() {
    if (hourInteger === 12) {
        $("#12PM").addClass("present");
    }
    if (hourInteger < 12) {
        $("#12PM").addClass("future");
    }
    if (hourInteger > 12) {
        $("#12PM").addClass("past");
    }
}
function onePm() {
    if (hourInteger === 13) {
        $("#1PM").addClass("present");
    }
    if (hourInteger < 13) {
        $("#1PM").addClass("future");
    }
    if (hourInteger > 13) {
        $("#1PM").addClass("past");
    }
}
function twoPm() {
    if (hourInteger === 14) {
        $("#2PM").addClass("present");
    }
    if (hourInteger < 14) {
        $("#2PM").addClass("future");
    }
    if (hourInteger > 14) {
        $("#2PM").addClass("past");
    }
}
function threePm() {
    if (hourInteger === 15) {
        $("#3PM").addClass("present");
    }
    if (hourInteger < 15) {
        $("#3PM").addClass("future");
    }
    if (hourInteger > 15) {
        $("#3PM").addClass("past");
    }
}
function fourPm() {
    if (hourInteger === 16) {
        $("#4PM").addClass("present");
    }
    if (hourInteger < 16) {
        $("#4PM").addClass("future");
    }
    if (hourInteger > 16) {
        $("42PM").addClass("past");
    }
}
function fivePm() {
    if (hourInteger === 17) {
        $("#5PM").addClass("present");
    }
    if (hourInteger < 17) {
        $("#5PM").addClass("future");
    }
    if (hourInteger > 17) {
        $("#5PM").addClass("past");
    }
}