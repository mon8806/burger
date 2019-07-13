var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-02.cleardb.net",
  port: 3306,
  user: "b4b672ec39154b",
  password: "5b7e5264",
  database: "heroku_0d820ff09a0530d"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;