var a = "apple";
var b = 4;
console.log(a + b);

if(!isNaN(a)) {
    console.log("That int even a number, thickie");
}else{
    console.log("menaing of life" + (a * b));
}

var myString = 'I\'m a "Fun" string favor';
console.log(myString.length);
console.log(myString.indexOf("string"));

if(myString.indexOf("favor") === -1) {
    console.log("the world favor is not the string");
}else{
    console.log("the word favor starts at position" + myString.indexOf("favor"));
}

var string1  = "abc";
var string2 = "ABC";

console.log(string1.toLowerCase() === string1.toLowerCase());

var str = "hello world!";
var str2 = str.slice(2,5);
console.log(str2);

var tags = "meat, ham, salami, prok, beef, chicken";
var tagArray = tags.split(",");
console.log(tagArray);