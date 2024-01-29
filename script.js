let elements = document.querySelectorAll('a');

// loop through array of elements and change color

for( let i = 0; i < elements.length; i++) {
    elements[i].style.color = "yellow";
}

console.log(elements);

fetch("./data/users.json")
.then(Response => Response.json())
.then(data =>  console.log(data))