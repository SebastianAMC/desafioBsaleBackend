import mysql from "promise-mysql";
import config from "./../config";

const pool = mysql.createPool({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password
});

const getConnection = () => {

    return pool;
};

module.exports = {
    getConnection
};