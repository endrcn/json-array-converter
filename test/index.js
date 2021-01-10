const jsonConverter = require("../index");

const json = {
    json:{
        array: {
            converter: "json-array-converter"
        }
    },
    say: {
        hello: ["hello!"]
    }
}

console.log(jsonConverter.toArray(json));