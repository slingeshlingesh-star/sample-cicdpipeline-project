const express = require("express");
const app = express();

app.get("/",(req, res) => {
    res.send("CICD PIPELINE IS WORKING SUCCESSFULLY ON AWS ECS");
});

app.listen(3000, () => {
    console.log("server running on port 3000");
})
