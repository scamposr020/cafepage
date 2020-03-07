const express = require('express');
const Gethomepage = require('./routes/index');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


var sql = require("mssql/msnodesqlv8");

var dbConfig = {
    database: "practix",
    server: "localhost",
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
    }
}

var conn = new sql.ConnectionPool(dbConfig);

conn.connect(function(err) {
    if (err) {
        console.log("wrong");
    } else {
        console.log("Se ha conectado a la base de datos");
    }
});

global.dbConfig = dbConfig;
global.sql = sql;
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views');

Gethomepage(app);

const webserver = app.listen(5000, function() {
    console.log('Running on port 5000');
})