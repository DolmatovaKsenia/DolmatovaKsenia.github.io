let cookieParser = require("cookie-parser");
let session = require("express-session");

let MSSQLStore = require("connect-mssql")(session);
let mssql = require("mssql");

module.exports = {
    createStore: function () {
        let config = {
            user: "test",
            password: "12345",
            server: "localhost",
            database: "testdb",
            port: "3000",
            pool: {
                min: 10,
                max: 0,
                miliSeconds: 30000
            }

        }
        return new MSSQLStore(config);
    }
}