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
            let letter = event.target.textContent;

         //pass event.target into showMatchedLetter method
         this.activePhrase.showMatchedLetter(letter);
            if (this.activePhrase.checkLetter(letter)) {//if letter is passed to checkLetter method and returns true
              playAudio(correct);
              event.target.classList.add("chosen");//add chosen class
              event.target.disabled = true;//disable button
              event.target.style.cursor = "crosshair";
              this.checkForWin();

            } else if (!this.activePhrase.checkLetter(letter)) {//if letter is passed to checkLetter method and returns false
                playAudio(wrong);
                event.target.classList.add("wrong");//add wrong class
                event.target.disabled = true; //disable button
                event.target.style.cursor = "crosshair";
                this.missed += 1;
                this.removeLife();

            }

        });



//      }
      // document.addEventListener("keydown", (event) => {
      //     let letter = event.key;
      //
      //        //pass event.target into showMatchedLetter method
      //        this.activePhrase.showMatchedLetter(letter);
      //           if (this.activePhrase.checkLetter(letter)) {//if letter is passed to checkLetter method and returns true
      //             playAudio(correct);
      //             event.target.classList.add("chosen");//add chosen class
      //             event.target.disabled = true;//disable button
      //             event.target.style.cursor = "crosshair";
      //             this.checkForWin();
      //
      //           } else if (!this.activePhrase.checkLetter(letter)) {//if letter is passed to checkLetter method and returns false
      //               playAudio(wrong);
      //               event.target.classList.add("wrong");//add wrong class
      //               event.target.disabled = true; //disable button
      //               event.target.style.cursor = "crosshair";
      //               this.missed += 1;
      //               this.removeLife();
      //
      //           }
      //
      //
      //  });

      }

     document.addEventListener("keydown", (e) =>{
         let selected = e.key;
          for(let i=0; i < keyboardLetters.length; i++){

             //pass event.target into showMatchedLetter method
             this.activePhrase.showMatchedLetter(selected);
                if (this.activePhrase.checkLetter(selected)) {//if letter is passed to checkLetter method and returns true
                  playAudio(correct);
                  keyboardLetters[i].classList.add("chosen");//add chosen class
                  keyboardLetters[i].disabled = true;//disable button
                  keyboardLetters[i].style.cursor = "crosshair";
                  this.checkForWin();

                } else if (!this.activePhrase.checkLetter(selected)) {//if letter is passed to checkLetter method and returns false
                    playAudio(wrong);
                    keyboardLetters[i].classList.add("wrong");//add wrong class
                    keyboardLetters[i].disabled = true; //disable button
                    keyboardLetters[i].style.cursor = "crosshair";
                    this.missed += 1;
                    this.removeLife();

                }


           }

     });


/*****************KEYDOWN EVENT LISTENER ****************************/
            //   for(let i=0; i < keyboardLetters.length; i++){
            //
            //     keyboardLetters[i].addEventListener("keydown", (event) => {
            //
            // }

    }

    removeLife() {


    }

    checkForWin() {


    }

    gameOver() {


    }

 }
