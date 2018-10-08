var insereDados = function(d1, d2, d3, d4, d5)
{

    let mysql = require('mysql');

    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Hu3zord",
        database: "mydb"
    });

    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        let sql = "INSERT INTO computadores (setor, cpu, gpu, ram, disco) VALUES ?";
        let data = [d1, d2, d3, d4, d5];
        con.query(sql, data, function (err, result) {
            if (err) throw err;
            console.log("Inserção feita");
        });
    });
}

insereDados();

module.exports= insereDados;