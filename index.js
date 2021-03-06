const express = require("express");
const app = express();
const port = 5000;

var mysql = require("mysql");
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "password",
	database: "test",
});

con.connect(function (err) {
	if (err) {
		console.log("Error connecting to Db");
	}
	console.log("Connect to database");
});

app.get("/", (req, res) => {
	con.query("SELECT * FROM `ordersdata`", function (error, results, fields) {
		if (error) throw error;
		console.log("The solution is: ", results);
	});
	res.send({ msg: "working " }).status(200);
});

app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`)
);
