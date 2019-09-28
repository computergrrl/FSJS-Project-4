/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {


    constructor(missed, phrases, activePhrase) {

      this.missed = missed;
      this.phrases = phrases;
      this.activePhrase = activePhrase;

    }

    startGame() {
      //first remove the screen overlay to show game screen
      document.getElementById("overlay").style.display = "none";
      this.activePhrase = this.getRandomPhrase(); //call getRandomPhrase

    }

    getRandomPhrase() {
      /* get a random number then use that random number to pull
         a phrase from the phrases array */
      const rand = Math.floor(Math.random() * (this.phrases.length ));
      return this.phrases[rand];
    }

    handleInteraction() {


    }

    removeLife() {


    }

    checkForWin() {


    }

    gameOver() {


    }

 }
