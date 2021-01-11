const JsonConverter = require("./lib/JsonConverter");
const jsonConverter = new JsonConverter();
exports.toArray = jsonConverter.toArray;
exports.toJson = jsonConverter.toJson;