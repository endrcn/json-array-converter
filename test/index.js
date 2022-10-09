const jsonConverter = require("../index");

const json = {
    "q": "Hangi kart?",
    "Maximum": {
        "q": "Hangi maksimum?",
        "Maxi Bonus": "asd",
        "Maxi Genç": "bcd"
    },
    "Bonus": {
        "q": "Hangi bonus?",
        "Maxi Bonus": "sdf",
        "Bonus Genç": "gcn"
    }
}

// console.log(jsonConverter.toArray(json));

console.log(JSON.stringify(jsonConverter.toJsonCrackFormat(json), null, 4));