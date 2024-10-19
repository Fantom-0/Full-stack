const batch = {
    eng: 20,
    maths: 30,
    science: 20,
    getavg() {
        console.log(this);  
        let avg = (this.eng+this.maths+this.science)/3; //this is a object oriented function
        console.log(avg);
    }
}


let sum = (a, b) => {   //this is an normal arrow function
    let c = a+b;
    console.log(c);
};

let add = (a, b) => ( //this is a implicit arrow function note: this needs parenthesis instead of curly braces for main statements
    a+b
);

console.log("hi there");
setTimeout(() => {
    console.log("apna college");
}, 3000);

console.log("welcome to");

let a = setInterval(() => {
    console.log("yus");
}, 2000);

setTimeout(() =>{
    clearInterval(a)
}, 10000);

//NORMAL FUNCTIONS HAVE FUNCTION SCOPE FOR "".THIS.""
//ARROW FUNCTIONS HAVE LEXICAL SCOPE WHIHC IS BASED ON THEIR PARENT'S SCOPE ALSO KNOWN AS LEXICAL SCOPE.