let array = [1,2,3,4,5,6,7,65,8,9,10,21,54];
let big =0;
for(let i = 0; i <= array.length; i++)
{
    if(array[i]>big) {
        big = array[i];
    }
}
console.log(big);