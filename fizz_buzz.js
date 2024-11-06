var outPut = [];
var count = 1;

function fizzBuzz() {

    if(count % 3 === 0) {
        outPut.push("Fizz"); 
    }else{
        outPut.push(count);
    }
    count++;
    console.log(outPut);
}

fizzBuzz();