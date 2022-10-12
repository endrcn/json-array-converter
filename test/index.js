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

console.log(JSON.stringify(jsonConverter.toArray(json), null, 4));