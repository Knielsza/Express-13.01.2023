
const express = require("express")
const app = express()
const PORT = 3000;


// app.get("/", function (req, res) {
//     res.send("dane html odesłane z serwera do przeglądarki")
//     console.log("kotleciki")
// })


app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})

app.use(express.static('static'))

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/static/formularz.html")
})

app.get("/handleForm", function (req, res) {
    console.log(req.query.color)
    res.send(`<body style="background-color: ${req.query.color}; font-size: 25rem; height: 100%; text-align: center; color: white">${req.query.color}</body>`)

})