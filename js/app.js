/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 //declare some global variables
 const overlay = document.getElementById("overlay");
 const startButton = document.getElementById("btn__reset");
 const phraseDisplay = document.querySelector("#phrase ul");
 const phraseLetters = document.getElementsByClassName("hide letter");
 const keyboardLetters = document.getElementsByClassName("key");
 const lives = document.querySelectorAll("#scoreboard ol li img");


 let game;
 let phrase;


//set vars for audio
const lose = document.getElementById("lose");
const welcome = document.getElementById("welcome");
const correct = document.getElementById("correct");
const wrong = document.getElementById("wrong");

function playAudio(x) {//function to play audio on certain button clicks
  x.play();
}
 startButton.addEventListener("click" , () => {

   game = new Game(thephrases); //instantiate new Game object
   game.startGame(); //call startGame method
   playAudio(welcome);//play audio welcome sound


});

//event listener for keydown event
document.addEventListener("keydown" , (e) => {
    for (let letter of keyboardLetters) { /*on keydown, start a for loop to go through all the keyboard letter keys from keyboardLetters variable declared above */
        if (letter.innerText == e.key) {//when it finds a letter whose text value is equal to the key pressed then call the click method on that letter (below)
          letter.click();
        }
    }
});
