let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    
    let item = document.createElement('li');
    item.innerText = inp.value;

    let delbtn = document.createElement("button");
    let space = document.createElement("br");

    delbtn.innerText = "delete";
    delbtn.classList.add =("delete");
    ul.appendChild(space);
    item.appendChild(delbtn);
    ul.appendChild(item);
    
    inp.value = "";
})


let delbtns = document.querySelectorAll(".delete");

ul.addEventListener("click", function (event) {
    if(event.target.nodeName == "BUTTON")
    {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});



// for(delbtn of delbtns) {
//     delbtn.addEventListener("click", function () {
//         let par = this.parentElement;
//         par.remove();
//     })
// }