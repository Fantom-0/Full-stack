let arr = [1, 2, 6, 3, 4, 5, 6, 7];

num = 6;

for(let i = 0; i < arr.length; i++)
{
    if(arr[i]==num)
    {
        arr.splice(i, 1);
    }
}

let a = 123424243;

let copy =a, count=0;

while(copy>0)
{
    count++
    copy= Math.floor(copy/10);

}

console.log(count);
let b=54363;
let copy2=b;
let sum=0;
while(copy2>0)
{
    sg = copy2%10;
    sum += sg;
    copy2 = Math.floor(copy2/10);

}

console.log(sum);

