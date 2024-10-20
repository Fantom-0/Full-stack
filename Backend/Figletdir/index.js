const figlet =  require("figlet");


figlet("chaitannya", function (err, data) {
    if(err) {
        console.log("somthings wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
})