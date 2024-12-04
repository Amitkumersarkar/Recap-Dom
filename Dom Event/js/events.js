// option 1 directly set on the html element


// option 2 onclick function on the html element
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// option 3 

const makeBlueBtn = document.getElementById('make-blue');
makeBlueBtn.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// option 3 another

const purpleBtn = document.getElementById('make-purple');
purpleBtn.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

// option 4

const pinkBtn = document.getElementById('make-pink');
pinkBtn.addEventListener('click', makePink);
function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// another option 4

const makeGreenBtn = document.getElementById('Make-Green');
makeGreenBtn.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
})

// final and most useable options 
document.getElementById('make-skyblue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'skyblue';
})