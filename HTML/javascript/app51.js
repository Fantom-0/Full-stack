const inp = prompt("enter the max number");

const rand = Math.floor(Math.random()* inp) +1;

let guess = prompt("guess the number");

while(true)
{
    if(guess=="quit")
    {
        console.log("you quit");
        break;
    }
    
    if(guess==rand)
    {
        console.log("youve guessed right");
        break;
    }
    
    else if(guess<rand)
    {
        guess = prompt("try higher");
    }

    else if(guess>rand){
        guess = prompt("try lower");
    }
}

