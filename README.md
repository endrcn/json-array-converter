# json-array-converter
[![NPM version](https://img.shields.io/npm/v/json-array-converter.svg)](https://www.npmjs.com/package/json-array-converter)

a json-to-array module written with Javascript


```javascript
const jsonConverter = require("json-array-converter");

jsonConverter.toArray({
        json:{
            array: {
                converter: "json-array-converter"
            }
        },
        say: {
            hello: ["hello!"]
        }
    })

```
The output is:
```output
[ { name: 'json',
    value: { array: [Object] },
    parent: -1,
    level: 0,
    index: 0 },
  { name: 'say',
    value: { hello: [Array] },
    parent: -1,
    level: 0,
    index: 1 },
  { name: 'array',
    value: { converter: 'json-array-converter' },
    parent: 0,
    level: 1,
    index: 2 },
  { name: 'hello',
    value: [ 'hello!' ],
    parent: 1,
    level: 1,
    index: 3 },
  { name: 'converter',
    value: 'json-array-converter',
    parent: 2,
    level: 2,
    index: 4 }
]
```

Output fields:

name -> node name

value -> node value

parent -> the parent index of the node

level -> how deep is the node's place

index -> the node's index

**To convert the array to an object**

```javascript
const jsonConverter = require("json-array-converter");

jsonConverter.toJson([
    {
        "name": "json",
        "value": {
            "array": {
                "converter": "json-array-converter"
            }
        },
        "parent": -1,
        "level": 0,
        "index": 0
    },
    {
        "name": "say",
        "value": {
            "hello": [
                "hello!"
            ]
        },
        "parent": -1,
        "level": 0,
        "index": 1
    },
    {
        "name": "array",
        "value": {
            "converter": "json-array-converter"
        },
        "parent": 0,
        "level": 1,
        "index": 2
    },
    {
        "name": "hello",
        "value": [
            "hello!"
        ],
        "parent": 1,
        "level": 1,
        "index": 3
    },
    {
        "name": "converter",
        "value": "json-array-converter",
        "parent": 2,
        "level": 2,
        "index": 4
    },
    {
        "name": "0",
        "value": "hello!",
        "parent": 3,
        "level": 2,
        "index": 5
    }
])

```
The output is:
```output
{
    json: {
        array: {
            converter: "json-array-converter"
        }
    },
    say: {
        hello: ["hello!"]
    }
}
```

