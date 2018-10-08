var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Hu3zord",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE computadores (serial INT AUTO_INCREMENT PRIMARY KEY, setor VARCHAR(4), cpu SMALLINT(255), gpu SMALLINT(255), ram SMALLINT(255), disco SMALLINT(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Tabela criada");
    });
});