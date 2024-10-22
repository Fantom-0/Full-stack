const express = require("express");

const app = express();

console.dir(app);

let port = 8080;

app.listen(port, () => {
    console.log("listening");
});

app.use("/", (req, res) =>
{
    console.log("the request has been granted");
    res.send("the request has been completed");
});