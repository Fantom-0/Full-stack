// let smallImages = document.getElementsByClassName("oldImg");

// for (let i = 0; i < smallImages.length; i++)
// {
//     console.dir(smallImages[i].src);
// }

// for (let i = 0; i < smallImages.length; i++)
//     {
//         smallImages[i].src = "assets/spiderman_img.png";
//         console.log(`the image of no. ${i} is changed.`);
//     }

//     //inner text - screen //text content - full given text html - literal code or markup

// let img = document.querySelector('img');
// img.getAttribute('id');
// img.setAttribute('id', "spiderman");

let para1 = document.createElement('p');
para1.innerText = "hey im red!";
document.querySelector("body").append(para1);
para1.classList.add("red");

let h3= document.createElement('h3');
h3.innerText = "hey im blue!";
document.querySelector("body").append(h3);
h3.classList.add("blue");

let input1 = document.createElement('input');
let btn1 = document.createElement('button');
btn1.innerText ="click me";


document.querySelector("body").append(input1);
document.querySelector("body").append(btn1);

for (btns of btn1)
{
    btn1.onclick = sayhellow;
}

function sayhellow() {
    alert("hellow");
}