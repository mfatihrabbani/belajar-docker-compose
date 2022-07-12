import express from "express";
import mysql from "mysql2";

const app = express();
const db = mysql.createConnection({
	host: "mysql_server",
	user: "root",
	password: "root"

});

app.get("/", (req, res) => {
	try{
		db.connect();
		res.status(200).json({message: "Success Connect to db"})
	}catch(err){
		console.log(err);
		res.status(500).json({message: "ERROR"})
	}
})

app.listen(3000, () => {
	console.log("Server ready")
});

