let url= "https://catfact.ninja/fact?max_length=60";
let url2 ="https://dog.ceo/api/breeds/image/random";
btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let fact = await getFacts2();
//     console.log(fact);
//     let p = document.querySelector("#show");
//     p.innerText = fact;
// });

// async function getFacts2 (response) {
//     try {
//       let raw =await axios.get(url);
//       return raw.data.fact;  
//         } catch(e) {
//             console.log("error -", e);
//             return "no fact found";
//     }
// } 

btn.addEventListener("click", async () => {
    let link = await getImage();
    let img = document.querySelector("#show");
    img.setAttribute("src", link);

});

async function getImage (response) {
    try {
      let raw =await axios.get(url2);
      return raw.data.message;  
        } catch(e) {
            console.log("error -", e);
            return "no fact found";
    }
} 