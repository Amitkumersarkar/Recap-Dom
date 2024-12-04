const placesList = document.getElementById('places-list');
const li = document.createElement('li');
li.innerText = 'india';
placesList.appendChild(li);

const mainContainer = document.getElementById('main-container');

// what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'my food list';
section.appendChild(h1);

const uL = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Biriyani';
uL.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Burger';
uL.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Pizza';
uL.appendChild(li3);

section.appendChild(uL);

mainContainer.appendChild(section);

// set innerHtml directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1> My Dress Section </h1>
<ul>

<li>T-shirt</li>
<li>shirt</li>
<li>denim</li>

</ul>

`;

mainContainer.appendChild(sectionDress);