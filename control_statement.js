var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore);
// console.log("Your love score is" + loveScore);

if(loveScore > 70) {
    console.log("Your love score" + loveScore + "%" + "You love each other like Kanye loves kanye");
}else{
    console.log("Your love score" + loveScore + "%");
}

if(loveScore > 30 && loveScore <= 40) {
    console.log("Your love score" + loveScore);
}else{
    console.log("Their love score" + loveScore); 
}

function isLeapYear(year) {
    if(year % 4 === 0) {
        if(year % 100 === 0) {
            if(year % 400 === 0) {
                return "Leap year";
            }else{
                return "Not leap year";
            }
        }else{
            return "Leap year";
        }
    }else{
        return "Not leap year.";
    }
}

isLeapYear(250);