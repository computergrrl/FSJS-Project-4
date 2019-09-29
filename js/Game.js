/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {


    constructor(phrases) {

      this.missed = 0;
      this.phrases = [];
        //create a loop that makes an array of Phrase objects
        for(let phrase of phrases) {
          this.phrases.push(new Phrase(phrase));
        }

      this.activePhrase = null;

    }

    startGame() {
      //first remove the screen overlay to show game screen
      document.getElementById("overlay").style.display = "none";
      this.activePhrase = this.getRandomPhrase(); //call getRandomPhrase and set it to activePhrase property
      phraseDisplay.innerHTML = this.activePhrase.addPhraseToDisplay();//

    }

    getRandomPhrase() {
      /* get a random number then use that random number to pull
         a phrase from the phrases array */
      const rand = Math.floor(Math.random() * (this.phrases.length ));
      return this.phrases[rand];
    }

    handleInteraction() {
        /* Loop through all the keys and add event handlers to each of them*/
        for(let i=0; i < keyboardLetters.length; i++){

          keyboardLetters[i].addEventListener("click", () => {
          phrase.checkLetter();

        });
      }

    }

    removeLife() {


    }

    checkForWin() {


    }

    gameOver() {


    }

 }
