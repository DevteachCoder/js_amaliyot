// let newDiv = document.createElement("div");
// console.log(newDiv);
// newDiv.className = "hello";
// newDiv.id = "Hello";
// newDiv.setAttribute("title","Hello World");

// let newTextDiv = document.createTextNode("Hello Text");
// newDiv.appendChild(newTextDiv);

// let container = document.querySelector("header .container");
// let h1 = document.querySelector("header h1");

// container.insertBefore(newDiv,h1)





// one.html

// let list = document.getElementById("items")

// function prependContent() {
//     let li = document.createElement("li");
//     li.className = "list-group-item"
//     let textNode = document.createTextNode("item 0"); 
//     li.appendChild(textNode);
//     list.prepend(li)
// };

// function remove() {
//     let firstChild = list.firstElementChild;
//     firstChild.remove();
// }





// two.html

function slideUp() {
    let elm = document.getElementById("demo");
    elm.style.maxHeight = "0px"
};
function slideDown() {
    let elm = document.getElementById("demo");
    elm.style.maxHeight = "100px"
}



// three.html

function fadeOut() {
    let elm = document.getElementById("demo");
    elm.style.opacity = 0;
    setTimeout (function() {
        elm.style.display = 'none'
    },1000)
};
function fadeIn() {
    let elm = document.getElementById("demo");
      setTimeout (function() {
        elm.style.opacity = 1 
    },1000)
    elm.style.display = "block";
   
}

