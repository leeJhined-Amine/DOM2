let block = document.getElementById('block');
let button = document.getElementById('button');

button.onclick = function() {
    let color = Math.floor(Math.random() * 16581375).toString(16).padStart(6, '0')
    console.log(color)
    block.style.backgroundColor = `#${color}`
};