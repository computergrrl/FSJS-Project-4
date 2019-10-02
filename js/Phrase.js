/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {

    constructor(phrase) {

      this.phrase = phrase.toLowerCase();

    }

    //method to split string into an array of characters
    getLetters() {

      return this.phrase.split("");

    }

    getUniqueLetters() {//this method returns an array of all the unique letters in the phrase

      const getUnique = new Set(this.getLetters());//create an object of unique letters
      const unique = [...getUnique];//turn above object back into an array
      return unique;


    }

    addPhraseToDisplay() {

      let letters = ""; //variable to hold html string
      this.getLetters().forEach( letter => {//loop through characters

        if(letter == " ") { // if character is a space add space class
          letters += '<li class="space">' +letter + '</li>';

        } else {  //add hide letter class to the letter
            letters += '<li class="hide letter">' +letter + '</li>';

        }


      });
      return letters;
    }


    checkLetter(letter) {

      /*  if letter is found in array of characters returned from getLetters method then return true. Otherwise return false */
      if(this.getLetters().includes(letter)) {
        return true;
      }
        return false;

    }


    showMatchedLetter(letter) {

      for(let i=0; i < phraseLetters.length; i++) {
          if(phraseLetters[i].textContent == letter) {
            phraseLetters[i].className = "show letter";
            i--; //this fixes a glitch where two of the same letter in a row wouldn't work.
          }

      }

    }

 }
