const express = require("express")
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.end("helllooooooooo")

})

let diary = [];

app.post("/write", (req, res) => {
    diary.push(req.body)
    res.send("Diary entry added")
})


app.get("/read",(req, res) => {
    res.json(diary)
})



app.put("/update/:index",(req, res) => {
    diary[req.params.index] = req.body
    res.send("diary entry updated")
})


app.delete("/delete",(req,res) => {
    diary.splice(req.params.index, 1)
    res.send("diary entery delted")
})






app.listen(3000, () => {
    console.log("server is on guys");
    
})