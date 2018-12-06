//Create an array of words
let word = ['lebron', 'kobe', 'jordan', 'alleniverson', 'durant', 'anthonydavis', ];
//Choose words randonly
let randomNumber = Math.floor(Math.random() * word.length);
let chosenWord = word[randomNumber];
let rightWord = [];
let wrongWord = [];
let underScore = [];
let guessesLeft = 10;
let startGuesses = 10;

// Dom manipulation
let docUnderScore = document.getElementsByClassName('underScores');
let docRightGuess = document.getElementsByClassName('rightGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess');
// Test
console.log(chosenWord);
underScore = [];
console.log(chosenWord);
//Create underscores based on length of word
let generateUnderscore = () => {
    for (let i = 0; i < chosenWord.length; i++) {
        underScore.push("_"); 
    }
    
    docUnderScore[0].innerHTML = underScore;
    
} 
generateUnderscore();
guessesLeft =  startGuesses; 

//Get Users guess
document.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.keyCode);
    //if user guess right
    if (chosenWord.indexOf(keyword) > -1) {
    //add to right words array
    rightWord.push(keyword);
    
    //replace underscore with right letter
    underScore[chosenWord.indexOf(keyword)] = keyword;
    docRightGuess[0].innerHTML = rightWord;
    docUnderScore[0].innerHTML = underScore.join(' ');

    //checks to see if user word matches guess
    if (underScore.join('') == chosenWord) {
        
        alert('You win');
    }
 
        
    
    }

    if (guessesLeft == 0) {
        alert('You lost');
    }
    // add to wrong words arry
    else {
    wrongWord.push(keyword);
    docWrongGuess[0].innerHTML = wrongWord;
    guessesLeft --; 
    console.log("guessleft" + guessesLeft);
}
}) 

