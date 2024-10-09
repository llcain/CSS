
import data from './assets/data/data.json';
const frame = document.getElementById("loop");
data.map((element) => {
    console.log(element);
    let newDiv = document.createElement("div");
    newDiv.id = element.id;
    newDiv.className = "card";
    newDiv.innerHTML = `
        <h2>${element.name}</h2>
        <p>${element.desc}</p>
        <button class="btn'>let see</button>`;
    frame.appendChild(newDiv);
});


fetch("./assets/data/data.json")
.then((response) => response.json())
.then((data) => {
    console.log(data);
})
.catch ((error) => console.log('Error loading JSON', error));