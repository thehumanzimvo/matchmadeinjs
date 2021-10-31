var prompt = require('prompt-sync')();
var playerOne = prompt('Player1, please enter your first name: ').toLowerCase().trim();
var playerTwo = prompt('Player2, please enter your first name: ').toLowerCase().trim();
var cleanNames = (playerOne+playerTwo);
var rawMatchArray = [];
var tmpArray = "";
var mush = (cleanNames).split('');
var x = 0;
var y =[];

// count character recurrence
while(mush.length > x){
    // console.log(tmpArray.split(mush[x]).length - 1)
    if ((tmpArray.split(mush[x]).length - 1) == 0) {
        // console.log(`${mush[x]} already exists`);
        tmpArray += mush[x];
        rawMatchArray.push(cleanNames.split(mush[x]).length - 1);
    }
    x++;
}

//function to add numbers on opposite sides
var b = 0;
var finn = true;
while(finn) {
    if(rawMatchArray.length >= 2) {
        y.push(rawMatchArray[b] + rawMatchArray[rawMatchArray.length-1-b]);
        // console.log("pushing to y")
        rawMatchArray.shift();
        // console.log("shifting")
        rawMatchArray.pop();} else {rawMatchArray.shift()}
        // console.log("shifting last digit")
        b++;
    if (rawMatchArray.length == 0) {
        rawMatchArray = y;
        console.log(rawMatchArray)
        // console.log("transfer y to raw")
        b = 0;
        console.log("reset b to 0");
        if (rawMatchArray.length == 2) {console.log("done"); return finn} else {console.log(`raw len == ${rawMatchArray.length} `)}
    } else {console.log("continuing")}
    if (b == 0) {
        if(rawMatchArray.length >= 2) {
            y.push(rawMatchArray[b] + rawMatchArray[rawMatchArray.length-1-b]);
            // console.log("pushing to y")
            rawMatchArray.shift();
            // console.log("shifting")
            rawMatchArray.pop();} else {rawMatchArray.shift()}
            // console.log("shifting last digit")
            console.log(rawMatchArray.length)
            if (rawMatchArray.length == 2) { if(parseInt(rawMatchArray[0]+rawMatchArray[1]) >= 80){console.log(`${playerOne} and ${playerTwo} ${parseInt(rawMatchArray[0]+rawMatchArray[1])}% good match`)} else{`${playerOne} and ${playerTwo} match ${parseInt(rawMatchArray[0]+rawMatchArray[1])}%`} console.log(`done ${rawMatchArray}`); finn = false; return finn} else {console.log(`raw len == ${rawMatchArray.length} `)}
        }
}

function cleanV2(word1, word2) {
    var words = word1 + word2
    var letters = /^[A-Za-z]+$/;
    for (var c = 0; words.length > c; c++) {
        if (words[c].match(letters || ',') != true) {
            return false;
        }
    }
}