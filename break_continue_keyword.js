//BREAK
for(i = 0; i < 10; i++) {

    if(i === 5) {
        break;
    }
    console.log("keep going bro!");
}
console.log("I have broken out of the loop!");

//CONTINUE

for(i = 0; i < 10; i++) {

    if(i === 5 || i === 3) {
        continue;
    }
    console.log(i);
}
console.log("I have broken out of the loop!");