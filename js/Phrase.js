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

    addPhraseToDisplay() {

      let letters; //variable to hold html string
      this.getLetters().forEach( letter => {//loop through characters

        if(letter == " ") { // if character is a space add space class
          letters += '<li class="space">' +letter + '</li>';

        } else {  //add hide letter class to the letter
            letters += '<li class="hide letter">' +letter + '</li>';

        }


      });
      return letters;
    }


    checkLetter() {



    }


    showMatchedLetter() {


    }

 }
