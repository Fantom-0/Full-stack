let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;
h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {      //code
    if(started == false) {
        console.log("game has started");
        started = true;
        levelUp();
    }
});

function levelUp() {                                //function
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    console.log(userSeq);
    gameFlash(randbtn);
}

function gameFlash(btn) {                                     //function
    btn.classList.add("flash");                          
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}


let allBtns =document.querySelectorAll(".btn");  //code
for (btn of allBtns)
{
    btn.addEventListener("click", btnPress)
}

function btnPress () {
    console.log(this); 
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}


function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 250);
}



function checkAns(idx) {

    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }    
        console.log("ha")
    } else {
        h2.innerHTML = `game over buddy your score was <b>${level}</b> press any key to try again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        },150) 
        reset();
    }
}

function reset () {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}