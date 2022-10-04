// setting up the dark/light mode toggle
const container = document.querySelector('.container');
const containerInner = document.querySelector('.container-inner');
const dark = document.getElementById('moon');
const light = document.getElementById('sun');
const topPanel = document.querySelector('.top');
const colorBox = document.querySelector('.color-box');
const color = document.querySelector('.color');
const btn = document.querySelector('#btn');

dark.addEventListener('click', function(){
    dark.classList.add('hide');
    light.classList.remove('hide');
    light.style.color = '#fff';
    container.style.backgroundColor = '#000';
    container.style.color = '#fff';
    containerInner.style.border = '2px solid #fff';
    topPanel.style.borderBottom = '2px solid #fff';
    colorBox.style.backgroundColor = '#fff';
    color.textContent = '#ffffff';
    btn.style.border = '2px solid #fff';
})

light.addEventListener('click', function(){
    light.classList.add('hide');
    dark.classList.remove('hide');
    dark.style.color = '#000';
    container.style.backgroundColor = '#fff';
    container.style.color = '#000';
    containerInner.style.border = '2px solid #000';
    topPanel.style.borderBottom = '2px solid #000';
    colorBox.style.backgroundColor = '#000';
    color.textContent = '#000000';
    btn.addEventListener('mouseenter', function () {
        btn.classList.remove('btn');
        btn.classList.add('btn-dark');
    });
    btn.style.border = '2px solid #000';
});
// setting up the color shuffle (coming soon...)

const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

btn.addEventListener('click', function(){
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    color.textContent = hexColor;
    colorBox.style.backgroundColor = hexColor;
})