/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


 const startButton = document.getElementById("btn__reset");
 //const overlay = document.getElementById("overlay");

 let game;
 startButton.addEventListener("click" , () => {
   document.getElementById("overlay").style.display = "none";
   game = new Game("one", thephrases, "three");
   game.startGame();

});
