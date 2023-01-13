
const express = require("express")
const app = express()
const PORT = 3000;
const bodyParser = require("body-parser")


// app.get("/", function (req, res) {
//     res.send("dane html odesłane z serwera do przeglądarki")
//     console.log("kotleciki")
// })

app.use(express.static('static'))

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/handleForm", function (req, res) {
    console.log(req.body)
    res.send(`<body style="background-color: ${req.body.color}; font-size: 25rem; height: 100%; text-align: center; color: white">${JSON.stringify(req.body)}</body>`)
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/static/formularz1.html")
})
