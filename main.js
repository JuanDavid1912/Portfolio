let text = document.getElementById("edit-number");

let element = document.body;

let counter = 0;

element.onclick = ()=>{
    counter++;

    text.innerHTML = `${counter}`;

}