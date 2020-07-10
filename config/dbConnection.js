const mongo = require("mongodb");

const wrapper = function () {
    return function () {
        console.log("Conexão com DB");

        const db = new mongo.Db(
            "got",
            new mongo.Server("localhost", 27017, {}),
            {}
        );
        return db;
    };
};

module.exports = wrapper;
