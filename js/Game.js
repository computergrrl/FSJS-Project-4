/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {


    constructor(phrases) {

      this.missed = 0;
      this.phrases = [];
      /*  Following Creates a loop that makes an array of Phrase objects
        1. Cycles through each phrase from the array of phrases that have been passed in (from separate file)
        2. Uses them each as parameters that are then passed into newly created Phrase objects
        3. Those Phrase objects are then in turn pushed into an array that's set to the this.phrases property  */
        for(let phrase of phrases) {
          this.phrases.push(new Phrase(phrase));

        }

      this.activePhrase = null;

    }

    startGame() {
      //first remove the screen overlay to show game screen
      document.getElementById("overlay").style.display = "none";
      this.activePhrase = this.getRandomPhrase(); //call getRandomPhrase and set it to activePhrase property

      phraseDisplay.innerHTML =
      this.activePhrase.addPhraseToDisplay();//calls method to add the phrase letters to the gameboard

      this.handleInteraction();//adds event listeners to all the letter keys on the display keyboard and game-user interactions.

    }

    getRandomPhrase() {
      /* get a random number then use that random number to pull
         a Phrase object from the array of phrase objects that were created in the constructor */
      const rand = Math.floor(Math.random() * (this.phrases.length ));
      return this.phrases[rand];
    }

    handleInteraction() {
        /* Loop through all the keys and add event handlers to each of them*/
        for(let i=0; i < keyboardLetters.length; i++){

          keyboardLetters[i].addEventListener("click", (event) => {
             this.activePhrase.showMatchedLetter(event.target.textContent);
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
