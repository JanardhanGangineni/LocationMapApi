var express = require("express");
var app = express(); app.listen(3000, () => {
    console.log("Server running on port 3000");
});
app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    res.header("Access-Control-Allow-Methods", "GET, POST", "PUT");
    next();
});
app.get("/getOverlayLayerDetails", (req, res, next) => {
    var layerdetails = [
        { layername: "Name 1", url: "http://www.google.com" },
        { layername: "Name 1", url: "http://www.google.com" },
        { layername: "Name 1", url: "http://www.google.com" }
    ];
    res.json(layerdetails);
});