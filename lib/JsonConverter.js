class JsonConverter {
    /**
     * Extract jsonObject object to array.
     * @param {Object} jsonObject
     * @returns {Object[]} arr
     */
    toArray(jsonObject) {
        let nodes = [];
        let keys = [];
        for (let node in jsonObject) {
            keys.push({
                name: node,
                value: jsonObject[node],
                parent: -1,
                level: 0,
                index: keys.length
            });

            nodes.push(jsonObject[node]);
        }

        for (var i = 0; i < nodes.length; i++) {
            if (typeof nodes[i] != "string") {
                for (var node in nodes[i]) {
                    keys.push({
                        name: node,
                        value: nodes[i][node],
                        parent: i,
                        level: keys[i].level + 1,
                        index: keys.length
                    });
                    nodes.push(nodes[i][node]);

                }
            }

        }


        return keys;
    }

    /**
     * Convert array to jsonObject
     * @param {Array} object array
     * @returns {Object} jsonObject
     */
    toJson(array) { //TODO: This method should be finished.
        let json = {};
        array.sort((a, b) => a.parent <= b.parent);
        for (let i = 0; i < array.length; i++) {
            let item = array[i];
            if (item.parent > -1) {
                // abc
            } else {
                json[item] = {};
            }
        }
    }
}

module.exports = JsonConverter;