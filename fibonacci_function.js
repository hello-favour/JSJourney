function fibonacciGenerator(n) {
    var output = [];
    if(n === 1) {
        output = [0];
    }else if(n === 2) {
        output = [0, 1];
    }else{
        output = [0,1];
        output.push(output[0] + output[1]); //[0,1,1];
    }
    return output;
}

score = fibonacciGenerator(5);
console.log(score);