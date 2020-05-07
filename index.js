const express = require("express");
const app = express();
const port = 5000;

var mysql = require("mysql");
var con = mysql.createConnection({
	host: "localhost",
	user: "admin",
	password: "luxembourg",
	database: "test",
});

app.get("/", (req, res) => {
	con.connect(function (err) {
		if (err) {
			console.log("Error connecting to Db");
			console.log(err);
			res.send({ msg: "database not connected" }).status(400);
		}
		res.send({ msg: "database connected" }).status(200);
	});
});

app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`)
);
