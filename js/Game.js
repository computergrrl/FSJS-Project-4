/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {


    constructor(phrases) {

      this.missed = 0;
      this.phrases = [];
      /*  Following for loop makes an array of Phrase objects
        1. Loops through each phrase from the array of phrases that have been passed in (from separate file)
        2. Uses them each as parameters that are then passed into newly created Phrase objects
        3. Those Phrase objects are then in turn pushed into an array that's set to the this.phrases property  */
        for(let phrase of phrases) {
          this.phrases.push(new Phrase(phrase));

        }

      this.activePhrase = null;
      this.correctSelected = [];

    }

    startGame() {
      //first remove the screen overlay to show game screen
      overlay.style.display = "none";
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
            let letter = event.target.textContent;

         //pass event.target into showMatchedLetter method
         this.activePhrase.showMatchedLetter(letter);
            if (this.activePhrase.checkLetter(letter)) {//if letter is passed to checkLetter method and returns true
              playAudio(correct);
              event.target.classList.add("chosen");//add chosen class
              event.target.disabled = true;//disable button
              event.target.style.cursor = "crosshair";
              this.correctSelected.push(letter);
              if (this.checkForWin()) this.gameOver();


            } else if (!this.activePhrase.checkLetter(letter)) {//if letter is passed to checkLetter method and returns false
                playAudio(wrong);
                event.target.classList.add("wrong");//add wrong class
                event.target.disabled = true; //disable button
                event.target.style.cursor = "crosshair";
                this.removeLife();

            }//closes else if
          }); //closes event listener
        }//closes for loop
    }

    removeLife() {

          this.missed += 1; //increase missed property by 1
          let index = this.missed -1; //set an index variable to use on lives array
          const source = "images/lostHeart.png";
          lives[index].src = source; //set the next heart (starting at zero index) to the new src image)

          if (this.missed === 5) {
            this.gameOver(); //call gameOver method if missed = 5
          }


    }

    checkForWin() {
        /*check to see if unique letters in phrase is equal to the number of letters correctly guessed (minus 1 to account for the space character) */
        if (this.correctSelected.length ==
            this.activePhrase.getUniqueLetters().length -1) {
              return true;
            }
              return false;
    }

    gameOver() {

        if (this.checkForWin()) {//if checkForWin returns true then display overlay with .win class
          overlay.classList.add("win");
          const winMessage =
          '<p>&nbsp;</p><h2>Congratulations! You guessed the phrase "' +
          this.activePhrase.phrase + '"!</h2>';
          message.innerHTML = winMessage;
          overlay.prepend(message);
          overlay.style.display = "block";

          console.log("YOU WIN!!!");
        } else {//otherwise player lost so display with .lose class
          overlay.classList.add("lose");
          const loseMessage =
          '<p>&nbsp;</p><h2>Too bad! The phrase was "' +
          this.activePhrase.phrase + '"</h2>';
          message.innerHTML = loseMessage;
          overlay.prepend(message);
          overlay.style.display = "block";
        }
    }

 }
