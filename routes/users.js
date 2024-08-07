const router = require("express").Router(); //ルーティング設定
const User = require("../models/User");

//ユーザ登録
router.post("/register", async (req, res) => {
	try {
		const newUser = await new User({
			username: req.body.username,
			email: req.body.email,
			password: req.body.password,
		});
		const user = await newUser.save();
		return res.status(200).json(user);
	} catch (err) {
		return res.status(500).json(err); //サーバ関連のエラー(このプログラムが間違っていた時)
	}
})

module.exports = router;