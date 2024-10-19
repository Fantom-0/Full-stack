
let array = [2, 4, 5, 6, 2, 7];

let arrayAverage = (n) => {

    let sum = 0;

    for(let i = 0; i<n.length;i++)
    {
        sum += n[i];
    }
    console.log(sum);
};

arrayAverage(array);