// options 1 directly set on the html element


// options 2 onclick function
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// options 3 

const makeBlueBtn = document.getElementById('make-blue');
makeBlueBtn.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// options 3 another

const purpleBtn = document.getElementById('make-purple');
purpleBtn.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}