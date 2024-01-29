let elements = document.querySelectorAll('a');

// loop through array of elements and change color

for( let i = 0; i < elements.length; i++) {
    elements[i].style.color = "yellow";
}

console.log(elements);