const jsonConverter = require("../index");

const json = {
    "ender": "can",
    "alp": {
        "can": {
            "tuna": "selam"
        }
    } 
}

console.log(jsonConverter.toArray(json));