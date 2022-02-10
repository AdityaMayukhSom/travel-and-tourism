const sweetAdjectives = ["Genius", "Fantastic", "Phenomenon", "Captain", "Wonderful", "Unique"];
/*
function cursorBlink() {
    const txtElement = document.querySelector('.txt-type');
    setInterval(() => {
        txtElement.classList.toggle('blink-cursor');
    }, 500);
}
*/
//Constructor Function

const TypeWriter = function (txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait);
    this.type();
    this.isDeleting = false;
}
TypeWriter.prototype.type = function () {
    //Current Index Of Words
    const current = this.wordIndex % this.words.length;
    //Get full text of current word
    const fullTxt = this.words[current];
    //Check If Deleting
    if (this.isDeleting) {
        //Remove A Character
        this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
        //Add A Character
        this.txt = fullTxt.substring(0, this.txt.length + 1)
    }
    //Insert Text Into Element
    this.txtElement.innerHTML = `${this.txt}`;
    //Type Speed
    let typeSpeed = 500;
    if (this.isDeleting) {
        typeSpeed /= 2;
    }

    //If Word Is Complete
    if (!this.isDeleting && this.txt === fullTxt) {
        typeSpeed = this.wait;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed)
}

// Initialize On DOM Load

document.addEventListener('DOMContentLoaded', init);

function init() {
    // cursorBlink();
    const txtElement = document.querySelector('.txt-type');
    const words = sweetAdjectives;
    const wait = txtElement.getAttribute('data-wait');

    //Initialize the TypeWriter
    new TypeWriter(txtElement, words, wait);
}