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