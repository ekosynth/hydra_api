var express = require('express');
var router = express.Router();
var _ = require("lodash");

var buildFreeswitchStatus = require("./buildFreeswitchStatus");

/* GET users listing. */
router.get('/', function (req, res, next) {

    let responseArray = [];


    for (let index = 0; index < 8; index++) {
        responseArray.push(buildFreeswitchStatus(index, "FR", "Framlingham"));
    }

    for (let index = 0; index < 8; index++) {
        responseArray.push(buildFreeswitchStatus(index, "TH", "Telehouse"));
    }

    for (let index = 0; index < 8; index++) {
        responseArray.push(buildFreeswitchStatus(index, "MC", "Manchester"));
    }

    res.json(responseArray);
});

module.exports = router;

