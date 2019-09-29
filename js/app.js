/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 //declare some global variables
 const startButton = document.getElementById("btn__reset");
 const phraseDisplay = document.querySelector("#phrase ul");
 const phraseLetters = document.getElementsByClassName("hide letter");
 const keyboardLetters = document.getElementsByClassName("key");
 let game;
 let phrase;


 startButton.addEventListener("click" , () => {

   game = new Game(0, thephrases); //instantiate new Game object
   game.startGame(); //call startGame method
   phrase = new Phrase(game.activePhrase); //instantiate Phrase object


    phraseDisplay.innerHTML = phrase.addPhraseToDisplay();

    // keyboardLetters.forEach(key => {
    //    addEventListener("click", () => {
    //      console.log("you clicked" + key.textContent);
    //    })
    // });
    console.log(keyboardLetters);
});
