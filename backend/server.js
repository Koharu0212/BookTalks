const express = require("express");
const app = express();
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postsRoute = require("./routes/posts");

const PORT = 3000;

const mongoose =  require("mongoose");
require("dotenv").config();

//データベース接続
mongoose.connect(process.env.MONGOURL)
.then(() => {
	console.log("MongoDBと接続中");
})
.catch((err) => {
	console.log(err);
});

//ミドルウェア
app.use(express.json()); //データがJSON形式であるということを伝える
app.use("/api/users", userRoute); 
app.use("/api/auth", authRoute); 
app.use("/api/posts", postsRoute); 

app.get("/", (req, res) => {
	res.send("hello express");
})

// app.get("/users", (req, res) => {
// 	res.send("users express");
// })

app.listen(PORT, () => console.log("サーバが起動しました"));