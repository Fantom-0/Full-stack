h1 = document.querySelector('h1');

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed.");
        }, delay);
    });
}

changeColor("red", 1000)
.then(() => {
    console.log("red color was generated");
    return changeColor("orange", 1000);
})
.then(() => {
    console.log("orange color was generated");
    return changeColor("green", 1000);
})
.then(() => {
    console.log("green color was generated");
});


let student = {
    name: "cjaitannya",
    age: 45
};

stringi = JSON.stringify(student);

let url = "https://catfact.ninja/fact?max_length=50";
fetch(url)
    .then((response) =>{
        console.log(response);
        
        response.json().then((data) =>{
            console.log(data)
        })
    })
    .catch((err) => {
        console.log("error");
    })