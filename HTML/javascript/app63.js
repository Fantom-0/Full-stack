const array = [1,2,3,4,5,6,7,8,9,10,11,12,13];

    function larger(check) {

    for(let i = 0; i<=array.length; i++)
    {
        if(check<array[i])
        {
            console.log(array[i]);
        }
    }
}
let check = 12;

larger(check);

let str = "abbbcddeffghhii";

function getter(str) {
let result = "";
for(let i = 0; i<str.length; i++)
{
    if(str[i]!=str[i-1])
    {
        result += str[i];
    }
}
console.log(result);
}
getter(str);

let country = ["australia", "zimbawbe", "poland", "afghanisthan"]

function bigger(country) {
    let ansidx= 0;
    for(let i = 0; i < country.length; i++)
    {
        let anslnt = country[ansidx].length;
        let currlnt = country[i].length;
        if(currlnt>anslnt)
        {
            ansidx = i;
        }
    }
    return country[ansidx];
}

console.log(bigger(country));



