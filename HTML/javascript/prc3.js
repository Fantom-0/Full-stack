let a = prompt("enter a string of letters");

if(a=="" && a.length==0)
{
    alert("it is an empty string");
}

else
{
    alert(`${a} is printed`);
}

let string ="aPNaCoLleGe";

let str = prompt("enter a value to check");

if(string[str]==str.toLowerCase[str])
{
    alert("its lower case")
}

else
{
    alert("its not lower case");
}

let trimmer = "    abc  "

alert(`original string = ${trimmer}`)
alert(`trimmed = ${trimmer.trim()}`)

let check = [1, 2, 3, 4, 5, 6, 7];

let l = prompt("enter a value to check if its in the array");

if(check.indexOf(l)!=-1)
{
    alert("the value is in the array")
}

else{
    alert("the value is not in the array");
}