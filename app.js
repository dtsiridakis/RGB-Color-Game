var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static('public'))

app.get("/", function(req, res) {
    res.render("rgbGame");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started");
});