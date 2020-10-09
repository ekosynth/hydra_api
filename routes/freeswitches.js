var express = require('express');
var router = express.Router();
var _ = require("lodash");
var faker = require("faker");

function buildFreeswitchStatus(index, dataCentrePrefix, dataCentre) {
    index++;
    let freeswitchStatusObject = `{
        "serverId": "${dataCentrePrefix}-P-FS-${index}", 
        "name": "${dataCentrePrefix}-${index}", 
        "dataCentre": "${dataCentre}", 
        "status":true,
        "cpu":${faker.random.number({'min': 12, 'max': 14})},
        "load1":${faker.random.number({'min': 2.1, 'max': 6.9})},
        "load5":${faker.random.number({'min': 2.1, 'max': 6.9})},
        "memory":${faker.random.number({'min': 14, 'max': 17})},
        "topThreeUsers": [
        {
            "rank": 1,
            "name": "${faker.company.companyName(0)}",
            "numberOfCalls": ${faker.random.number({'min': 2501, 'max': 3000})}
        },
        {
            "rank": 2,
            "name": "${faker.company.companyName(0)}",
            "numberOfCalls": ${faker.random.number({'min': 1501, 'max': 2500})}
        },
        {
            "rank": 3,
            "name": "${faker.company.companyName(0)}",
            "numberOfCalls": ${faker.random.number({'min': 501, 'max': 1500})}
        }
    ]

    }`;

    return JSON.parse(freeswitchStatusObject);
}

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
