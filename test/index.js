const jsonConverter = require("../index");

const json = {
    "name": "Teams",
    "Football": [
        "Galatasaray",
        "Fenerbahçe",
        "Real Madrid",
        "Liverpool"
    ],
    "Basketball": [
        "LA Lakers",
        "Golden State"
    ]
}

// console.log(jsonConverter.toArray(json));
console.log(JSON.stringify(jsonConverter.toJsonCrackFormat(json), null, 4));