const express = require("express");
const app = express();

    console.dir(app);

let port = 8080;

app.listen(port, ()=> {
    console.log(`app is listening on port ${port}`);
});

// app.use((req, res) => {
//     console.log("request recieved");
//     res.send("basic response api express testing");
// });

// app.get("/", (req, res) => {
//     res.send("you contacted root path");
// });

// app.get("/main", (req, res) => {
//     res.send("you contacted main path");
// });

// app.get("/fruit", (req, res) => {
//     res.send("you contacted fruit path");
// });

// app.get("*", (req, res) => {
//     res.send("you contacted a wrong path son");
// });


app.get("/:username/:id", (req, res) => {
    let {username, id} = req.params;
    res.send(`your username ${username}`)
})