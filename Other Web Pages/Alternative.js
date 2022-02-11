const alternativeContainerRow = document.getElementsByClassName("alternative-container-row");
const imageList = [
    './Image/Space.jpg',
    './Image/ColdLava.jpg',
    './Image/Mountains.jpg',
    './Image/Drums.jpg',
    './Image/Concert.jpg',
    './Image/Lava.jpg'
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
    if (alternativeContainerRow[i].classList.contains("odd")) {
        alternativeContainerRow[i].style.backgroundColor = 'black';
        alternativeContainerRow[i].children[0].classList.add('background-image-fitting');
        alternativeContainerRow[i].children[0].style.backgroundImage = `url(${imageList[i]})`;
        alternativeContainerRow[i].children[1].append((stringToHTML(sectionText)));
        alternativeContainerRow[i].children[1].classList.add('text-color-white');

        clickButton = alternativeContainerRow[i].children[1].querySelector('btn');
        clickButton.classList.remove("btn-color-black");
        clickButton.classList.add("btn-color-white");
    } else {
        alternativeContainerRow[i].children[1].classList.add('background-image-fitting');
        alternativeContainerRow[i].children[1].style.backgroundImage = `url(${imageList[i]})`
        alternativeContainerRow[i].children[0].innerHTML = sectionText;
    }
}