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
        { url: "http://sedac.ciesin.columbia.edu/geoserver/wms",layername: "gpw-v4:gpw-v4-population-density_2015", displayname:"Population Density" },
        { url: "http://sedac.ciesin.columbia.edu/geoserver/wms",layername: "lulc:lulc-global-grid-prob-urban-expansion-2030", displayname:"Urban Expansion" },
    ];
    res.json(layerdetails);
});