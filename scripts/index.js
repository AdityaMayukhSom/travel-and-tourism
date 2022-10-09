/* ------------------------------------------------------------------------------------------------------------------------ */

/*❤️❤️ Progess Bar Starts 💕💕*/

const progressBar = document.getElementById("progress-bar");
const body = document.querySelector("body");

const animateProgressBar = () => {
    let scrollDistance = -body.getBoundingClientRect().top;
    let progressWidth = (scrollDistance / (body.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100;
    let value = Math.floor(progressWidth);
    progressBar.style.width = value + "%";
};

window.addEventListener("scroll", animateProgressBar);

/*❤️❤️ Progess Bar Ends 💕💕*/

/* ------------------------------------------------------------------------------------------------------------------------ */

/*🔥🔥 TypeWriter Effect Starts Here 🔥🔥*/

const myArr = ["Mysore", "Kashmir", "Ladakh", "Delhi", "Sikkim", "Meghalaya", "Kerala", "Andaman", "Goa", "Jaisalmer", "Sunderbans", "Hampi", "Kaziranga", "Rishikesh", "Jaipur", "Amritsar", "Shimla"];

// Initialize On DOM Load

document.addEventListener("DOMContentLoaded", init);

let viewPortWidth;

function init() {
    // cursorBlink();
    viewPortWidth = document.getElementById("carousel-viewport").clientWidth;
    const txtElement = document.querySelector(".txt-type");
    const words = myArr;
    const wait = txtElement.getAttribute("data-wait");
    new TypeWriter(txtElement, words, wait); //Initialize the TypeWriter
}

//Constructor Function

class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = "";
        this.wordIndex = 0;
        this.wait = parseInt(wait);
        this.type();
        this.isDeleting = false;
    }
    type() {
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
        } else if (this.isDeleting && this.txt === "") {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

/*🔥🔥 TypeWriter Effect Ends Here 🔥🔥*/

/* ------------------------------------------------------------------------------------------------------------------------ */

/*😶‍🌫️😶‍🌫️ Panel Functionality Starts Here 😶‍🌫️😶‍🌫️*/

const panels = document.querySelectorAll(".panel");
const panelSelectorForImage = document.getElementsByClassName("panel");
const imageHoverPage1 = document.getElementById("image-hover-page1");
const panelContainer = document.getElementById("panel-container");

const imageForPanel = [
    "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120",
    "https://images.unsplash.com/photo-1486299267070-83823f5448dd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171",
    "https://images.unsplash.com/photo-1587162146766-e06b1189b907?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256",
    "https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171",
    "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172",
];

for (let i = 0; i < panelSelectorForImage.length; i++) {
    panelSelectorForImage[i].style.backgroundImage = `url(${imageForPanel[i]})`;
}

panels.forEach((panel) => {
    panel.addEventListener("mouseover", () => {
        removeActiveClasses();
        panel.classList.add("active");
    });
});

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
}

panelContainer.addEventListener("mouseleave", removeActiveClasses);

/*😶‍🌫️😶‍🌫️ Panel Functionality Ends Here 😶‍🌫️😶‍🌫️*/

/* ------------------------------------------------------------------------------------------------------------------------ */

/*😋😋 Carousel Starts Here 🥲🥲*/

window.onresize = () => {
    viewPortWidth = document.getElementById("carousel-viewport").clientWidth;
};

let imageNumber = 1;
const carouselRibbon = document.getElementById("carousel-ribbon");
const carousalControlPanel = document.getElementById("carousal-control-panel");
const carouselControlButton = document.getElementsByClassName("carousel-control-button");
let carouselInterval = setInterval(changeImage, 4000);

let oldCarouselPointer = 0;
let newCarouselPointer = 0;

carousalControlPanel.onclick = (e) => {
    if (e.target === e.currentTarget) {
        null;
    } else {
        clearInterval(carouselInterval);
        imageNumber = e.target.dataset.imagecode;
        changeImage();
        carouselInterval = setInterval(changeImage, 4000);
    }
};
function changeImage() {
    if (imageNumber > 5) {
        imageNumber = 0;
    }
    oldCarouselPointer = newCarouselPointer;
    newCarouselPointer = imageNumber;
    carouselRibbon.style.marginLeft = `-${viewPortWidth * imageNumber}px`;
    carouselControlButton[newCarouselPointer].classList.add("outline");
    carouselControlButton[oldCarouselPointer].classList.remove("outline");
    imageNumber += 1;
}

/*😋😋 Carousel Ends Here 🥲🥲*/
