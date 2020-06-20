// Please note that code that has been 'commented out' was determined either incorrect or not necessary, however I have decided to leave it in to provide an understanding of the other attempts I made

// Various variables
var currentDay = document.getElementById("currentDay");
currentDay.innerHTML = moment().format("MMM Do YYYY");
var hour = document.getElementById("hour");
//$("currentDay").text = moment().format("MMM Do YYYY");
//var currentHour = document.getElementById("test");
//currentHour.innerHTML = moment().format('H');
var hourString = moment().format('H');
//var correctHour = new Date().getHours();
//var hourString = JSON.stringify(hourObject);
var hourInteger = parseInt(hourString);
//var nine = document.getElementById("nineText").value;

//console.log(parseInt(hourObject)===21);
//console.log(correctHour)
//multiple console.logs to test various things
//console.log(hour)
//console.log(typeof (hourString));
//console.log(hourString);
//console.log(typeof (hourInteger));
//console.log(hourInteger === 21);

//running of functions
storage();
nineAm();
tenAm();
elevenAm();
twelvePm();
onePm();
twoPm();
threePm();
fourPm();
fivePm();

//function to grab stored text
function storage() {
    document.querySelector("#nineText").textContent = localStorage.getItem('9AM');
    document.querySelector("#tenText").textContent = localStorage.getItem('10AM');
    document.querySelector("#elevenText").textContent = localStorage.getItem('11AM');
    document.querySelector("#twelveText").textContent = localStorage.getItem('12PM');
    document.querySelector("#oneText").textContent = localStorage.getItem('1PM');
    document.querySelector("#twoText").textContent = localStorage.getItem('2PM');
    document.querySelector("#threeText").textContent = localStorage.getItem('3PM');
    document.querySelector("#fourText").textContent = localStorage.getItem('4PM');
    document.querySelector("#fiveText").textContent = localStorage.getItem('5PM');
}

function nineAm() {
    // click function to save text
    $("#9lock").click(function () {
        var nine = document.getElementById("nineText").value;
        localStorage.setItem('9AM', nine);
    });
    //if statements to determine row colour
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
    // click function to save text
    $("#10lock").click(function () {
        var ten = document.getElementById("tenText").value;
        localStorage.setItem('10AM', ten);
    });
    ////if statements to determine row colour
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
    // click function to save text
    $("#11lock").click(function () {
        var eleven = document.getElementById("elevenText").value;
        localStorage.setItem('11AM', eleven);
    });
    //if statements to determine row colour
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
    // click function to save text
    $("#12lock").click(function () {
        var twelve = document.getElementById("twelveText").value;
        localStorage.setItem('12PM', twelve);
    });
    //if statements to determine row colour
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
    // click function to save text
    $("#1lock").click(function () {
        var one = document.getElementById("oneText").value;
        localStorage.setItem('1PM', one);
    });
    //if statements to determine row colour
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
    // click function to save text
    $("#2lock").click(function () {
        var two = document.getElementById("twoText").value;
        localStorage.setItem('2PM', two);
    });
    //if statements to determine row colour
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
    // click function to save text
    $("#3lock").click(function () {
        var three = document.getElementById("threeText").value;
        localStorage.setItem('3PM', three);
    });
    //if statements to determine row colour
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
    // click function to save text
    $("#4lock").click(function () {
        var four = document.getElementById("fourText").value;
        localStorage.setItem('4PM', four);
    });
    //if statements to determine row colour
    if (hourInteger === 16) {
        $("#4PM").addClass("present");
    }
    if (hourInteger < 16) {
        $("#4PM").addClass("future");
    }
    if (hourInteger > 16) {
        $("#4PM").addClass("past");
    }
}
function fivePm() {
    // click function to save text
    $("#5lock").click(function () {
        var five = document.getElementById("fiveText").value;
        localStorage.setItem('5PM', five);
    });
    //if statements to determine row colour
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
