console.log("Hello world")

const express= require("express");
const app = express();

const PORT= 5000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});

app.get("/", (req, res) =>{
    res.send("laxmi thakuri")
});
