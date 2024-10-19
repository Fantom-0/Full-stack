let todo = [];

let req = prompt("enter your request");

while(true)
{
    if(req=="quit")
    {
        console.log("quitting");
        break;
    }

    if(req=="list")
    {
        console.log("-------------------");
        for(let i=0; i<todo.length; i++)
        {
            console.log(i, todo[i]);
        }
        console.log("___________________");
    }
    else if(req=="add")
    {
        let task=prompt("please enter the task you wanted to add");
        todo.push(task);
        console.log("task added");
    }
    else if(req=="delete")
    {
        let idx = prompt("enter the index of task you want to delete");
        todo.splice(idx, 1);
    }

    req = prompt("enter your request");

}