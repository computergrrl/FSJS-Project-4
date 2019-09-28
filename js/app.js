/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


 const startButton = document.getElementById("btn__reset");
 //const overlay = document.getElementById("overlay");

 let game;
 let phrase;
 startButton.addEventListener("click" , () => {

   game = new Game(0, thephrases);
   game.startGame();
   // console.log(game.getRandomPhrase());
   // console.log(phrase);

   console.log(game);

});
