const btn = document.querySelector('button2');
const body = document.querySelector('body');
const color = [
    'red',
    'yellow',
    '#ffff',
    'gray',
    'blue',
    'mango',
    'orange',
    'pink',
    'brown',
    'olive',
    'green',
    'lightgreen',
    'purpule'
];

body.style.backgroundColor = 'violet';

btn.addEventListener('click', changeBG);

function changeBG() {
    const colorIndex = parseInt(Math.random() * color.length);
    body.style.backgroundColor = color[colorIndex];
}
