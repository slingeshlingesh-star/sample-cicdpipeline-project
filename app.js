const express = require("express");
const app = express();

app.get("/",(req, res) => {
    res.send("Hello this my BCA HELLO WORLD cicd pipeline project");
});

app.listen(3000, () => {
    console.log("server running on port 3000");
})