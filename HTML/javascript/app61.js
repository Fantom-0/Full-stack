function table(n)
{
    for(let i = n;i<=n*10;i+=n)
    {
        console.log(i);
    }
}

function getSum(n) {
    let sum =0;

    for( let i = 1; i<=n; i++)
    {
        sum += i;
    }
    return sum;
}

let str = ["hi", "hello", "bye", "!"];

function concat(str) {
    let result = "";

    for( let i = 0; i < str.length; i++)
    {
        result += str[i];
    }
    return result;
}

function oddevenfactory(call)
{
    if(call=="odd")
    {
        return function(a)
        {
            if(a/2!=0)
            {
                console.log("true");
            }
            else
            {
                console.log("false");
            }
        }
    }
    else if(call=="even")
    {
        return function(a)
        {
            if(a/2==0)
            {
                console.log("true");
            }
            else 
            {
                console.log("false");
            }
        }
    }
}
