// let btn = document.querySelector("button");

// btn.addEventListener("click", function() {
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;

//     let div = document.querySelector('div');
//     div.style.backgroundColor = randomColor;

// })

// function getRandomColor() {
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);

//     let color = `rgb(${red},${green},${blue})`;
//     return color;
// }

// let inp = document.querySelector("input");
// inp.addEventListener("keydown", function (event) {
//     console.log("code =", event.code);
//     if(event.code == "ArrowUp") {
//         console.log("moves up");
//     }
//     else if(event.code == "ArrowDown") {
//         console.log("moves down");
//     }
//     else if(event.code == "ArrowLeft")
//     {
//         console.log("moves left");
//     }
//     else if(event.code == "ArrowRight")
//     {
//         console.log("moves right");
//     }
// })

let inp = document.querySelector("#text");
let h3 = document.querySelector("h3");
let btn = document.querySelector("button");

h3.addEventListener("mouseout", function (event) {
    this.style.color = "orange";


    setTimeout(() =>(this.style.color = "" ),1000)
});

h3.addEventListener("mousedown", function (event) {
    this.style.color = "green";
})

h3.addEventListener("scroll", ()=> {
    console.log("scrolled!");
});

btn.addEventListener("click", function (event) {
    this.style.backgroundColor = "green";
    this.style.color = "yellow";

    setTimeout(() =>(this.style.color = ""), 1000);
});