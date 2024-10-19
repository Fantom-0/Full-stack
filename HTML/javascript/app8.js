/* array methods

forEach*/

let arr =[1,2,3,4,5,6];

let print = function(a) {
    console.log(a);
}

arr.forEach(print);

// map

let double = arr.map((el) => {
    return el*2;
});

let answer = arr.filter((el) => {
    return el % 2 == 0;
});

console.log(answer);

//every method- some method    // EVERY IS LOGICAL AND, SOME IS LOGICAL OR

let arr2 = [2,4,6,8,10];

let check = arr2.every((a)=>(a%2==0));

console.log(check);

let check2 = arr2.some((a)=>(a%2==1));

console.log(check2);


console.log([2, 4, 5, 6, 7].reduce((acc, el)=>(acc+el)));

let max = arr.reduce((max, el) =>{
    if (max<el)
    {
        return el;
    } else {
        return max;
    }
})

console.log(max);   

let race = ["james", "puffer", "tectone", "hexjuice", "lurou", "smii7y"]

let [runnerup, winner, last, dnf, crashed, deadbylaugh] = race;

let arr3=[2,3,4,5,6,7,9];

const square = arr2.map((a)=> a*a);
console.log(square);

let sum = square.reduce((acc, curr) => acc+curr, 0);
console.log(sum);
let avg = sum / arr2.length;
console.log(avg);


let copyarr3 = arr3.map((el) =>(el+5))
console.log(copyarr3);


let arr4 = ["a", "b", 'c', 'd'];

let uparr4 = arr4.map((string)=> string.toUpperCase() );

console.log(uparr4);

function doubleAndReturnArgs(array, ...args) {
    let arr5;
    let argsarr = args.map((el) =>el*2);
    arr5 = [...array, ...argsarr];
    console.log(arr5); 
}

const dara = (arr, ...args) =>[...arr3, ...args.map((el)=>(el*2))];


doubleAndReturnArgs(arr3, 2, 5, 6, 4, 7);

console.log(dara(arr3,2,4,5,6));

const merge = ( a, b) => ({...a,...b});

let merged = merge({a:1,b:2},{c:4,d:5});

console.log(merged);    
