var myArray = new Array();
myArray[0] = 8;
myArray[1] = "hello";


var myCar = new Object();
myCar.maxSpeed = 5;
myCar.driver = "Godwin";

myCar.drive = function() {
    console.log("now driving");
}

myCar.drive = function() {
    console.log("now driving self");
}

myCar.move = function() {
    console.log("keeping moving driver");
}

myCar.drive();
console.log(myCar.driver);

var myMove = new Object();
myMove.move = function() {
    console.log("move faster");
}

myMove.move();


var student = new Object();
student.name = "Favor!";
console.log(student.name);

student.course = function() {
    console.log("im studying computer science");
}

student.course();

var myCar2 = {
    drive:function(speed, time) {
        console.log(speed + time);
    }
}

myCar2.drive(50, 3);
