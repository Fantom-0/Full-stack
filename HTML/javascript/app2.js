let name =prompt("enter your first name");
let age =prompt("enter your age");
let textline=(`${name} is ${age} years old `);

alert(textline);

let quarter =prompt("enter the quarter of the year")
switch(quarter)
{
    case '1':alert( "january, february, march");
    break;
    case '2':alert( "april, may, june");
    break;
    case '3':alert("july august, september");
    break;
    case '4':alert( "october, november, december");
    break;
    default:alert("unknown quarter");
    break; 
}

let a=prompt("enter the first number");
let b=prompt("enter the second number");
let c=prompt("enter the third number");

if(a>b&&a>c)
{
    alert(a);
}

else if(b>c&&b>a)
{
    alert(b);
}

else if(c>a&&c>b)
{
    alert(c);
}
