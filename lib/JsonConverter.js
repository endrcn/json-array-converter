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
    toJson(array) {
        let json = {}
        array = array.filter(a => a.parent == -1);
        for (let i = 0; i < array.length; i++) {
            json[array[i].name] = array[i].value;
        }
        return json;
    }

    toJsonCrackFormat(jsonObject) {
        let json = {};
        for (let key in jsonObject) {
            if (typeof jsonObject[key] != "object") {
                json[key] = jsonObject[key];
            } else if (Array.isArray(jsonObject[key])) {
                json[key] = jsonObject[key];
            } else {
                if (!json[key]) json[key] = [];
                
                json[key].push(this.toJsonCrackFormat(jsonObject[key]));
            }
        }

        return json;

    }

}

module.exports = JsonConverter;