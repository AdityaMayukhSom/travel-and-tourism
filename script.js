/* ------------------------------------------------------------------------------------------------------------------------ */

/*❤️❤️ Progess Bar Starts 💕💕*/

const progressBar = document.getElementById('progress-bar');
const body = document.querySelector('body');

const animateProgressBar = () => {
    let scrollDistance = -body.getBoundingClientRect().top;
    let progressWidth = (scrollDistance / (body.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100;
    let value = Math.floor(progressWidth);
    progressBar.style.width = value + "%";
}

window.addEventListener("scroll", animateProgressBar);

/*❤️❤️ Progess Bar Ends 💕💕*/

/* ------------------------------------------------------------------------------------------------------------------------ */

/*🔥🔥 TypeWriter Effect Starts Here 🔥🔥*/

const myArr = ['Mysore', 'Kashmir', 'Ladakh', 'Delhi', 'Sikkim', 'Meghalaya', 'Kerala', 'Andaman', 'Goa', 'Agra', 'Varanasi', 'Jaisalmer', 'Rann Of Kutch', 'Aurangabad', 'Sunderbans', 'Hampi', 'Kaziranga', 'Rishikesh', 'Jaipur', 'Amritsar', 'Shimla'];

// Initialize On DOM Load

document.addEventListener('DOMContentLoaded', init);

function init() {
    // cursorBlink();
    const txtElement = document.querySelector('.txt-type');
    const words = myArr;
    const wait = txtElement.getAttribute('data-wait');
    new TypeWriter(txtElement, words, wait); //Initialize the TypeWriter
}

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
    const current = this.wordIndex % this.words.length; //Current Index Of Words
    const fullTxt = this.words[current]; //Get full text of current word
    let typeSpeed = 500; //Type Speed Is Changing Thus It Is let

    /*Check If Deletion Is Ongoing*/
    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1); //If Deleting, Then Remove Another Character
        typeSpeed /= 2; //Increases The Delete Speed Thus Reducing Time For Each Delete
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1); //Add A Character
    }
    this.txtElement.innerHTML = `${this.txt}`; //Insert Text Into Element

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


/*🔥🔥 TypeWriter Effect Ends Here 🔥🔥*/

/* ------------------------------------------------------------------------------------------------------------------------ */

/*😶‍🌫️😶‍🌫️ Panel Functionality Starts Here 😶‍🌫️😶‍🌫️*/

const panels = document.querySelectorAll('.panel');
const panelSelectorForImage = document.getElementsByClassName('panel');
const imageForPanel = [
    './Image/LightBeam.jpg',
    './Image/Neon.jpg',
    './Image/NiceLights.jpg',
    './Image/Person.jpg',
    './Image/Rider.jpg'
];

for (let i = 0; i < panelSelectorForImage.length; i++) {
    panelSelectorForImage[i].style.backgroundImage = `url(${imageForPanel[i]})`;
}

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}

/*😶‍🌫️😶‍🌫️ Panel Functionality Ends Here 😶‍🌫️😶‍🌫️*/

/* ------------------------------------------------------------------------------------------------------------------------ */

/*🔥🔥 Cursor Blink Functionality Starts Here🔥🔥*/

/*
function cursorBlink() {
    const txtElement = document.querySelector('.txt-type');
    setInterval(() => {
        txtElement.classList.toggle('blink-cursor');
    }, 500);
}
*/

/*🔥🔥 Cursor Blink Functionality Ends Here🔥🔥*/

/* ------------------------------------------------------------------------------------------------------------------------ */

/*🔥🔥 Alternative Panel Starts Here🔥🔥*/

const alternativeContainerRow = document.getElementsByClassName("alternative-container-row");
const imageList = [
    './Image/Delhi.jpg',
    './Image/Agra.jpg',
    './Image/Manali.jpg',
    './Image/Kerala.jpg',
    './Image/Kolkata.jpg',
    './Image/Maldives.jpg'
];

const sectionText = `<section class="alternative-container-text">
<h2 class="title">SECTION TITLE</h2>
<div class="text">
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit id accusamus tempore odio vel
        quas debitis minus ipsum? A quasi quo voluptatibus quod aut cum quidem, architecto neque
        beatae rem?
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nam doloremque velit dolorem
        ut, laudantium iusto, dicta placeat optio dolores ratione recusandae voluptatibus odio.
        Nostrum cupiditate velit voluptatibus voluptatem reprehenderit?
    </p>
</div>
<div class="buttons">
    <a href="#" class="btn btn-color-black">Click Me</a>
</div>
</section>`;

var stringToHTML = function (str) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    console.log(doc.body);
    return doc.body;
};


for (let i = 0; i < alternativeContainerRow.length; i++) {
    if (i % 2 === 1) {
        alternativeContainerRow[i].classList.add("odd");
    } else {
        alternativeContainerRow[i].classList.add("even");
    }
}


for (let i = 0; i < alternativeContainerRow.length; i++) {
    if (alternativeContainerRow[i].classList.contains("even")) {
        alternativeContainerRow[i].style.backgroundColor = 'black';
        alternativeContainerRow[i].children[0].classList.add('background-image-fitting');
        alternativeContainerRow[i].children[0].style.backgroundImage = `url(${imageList[i]})`;
        alternativeContainerRow[i].children[1].innerHTML = sectionText;
        alternativeContainerRow[i].children[1].classList.add('text-color-white');

        // clickButton = alternativeContainerRow[i].children[1].querySelector('btn');
        // clickButton.classList.remove("btn-color-black");
        // clickButton.classList.add("btn-color-white");
    } else {
        alternativeContainerRow[i].children[1].classList.add('background-image-fitting');
        alternativeContainerRow[i].children[1].style.backgroundImage = `url(${imageList[i]})`
        alternativeContainerRow[i].children[0].innerHTML = sectionText;
    }
}

/*🔥🔥 Alternative Panel Ends Here🔥🔥*/