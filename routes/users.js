const router = require("express").Router(); //ルーティング設定
const User = require("../models/User");

//CRUD
//ユーザ情報の更新
router.put("/:id", async (req, res) => {
	if (req.body.userId === req.params.id || req.body.isAdmin) { //req.params.id: URLに含まれるid
		try {
			const user = await User.findByIdAndUpdate(req.params.id, {
				$set: req.body, //$set: Userの全てのパラメータ
			});
			res.status(200).json("ユーザ情報が更新されました");
		} catch (err) {
			return res.status(500).json(err);
		}
	} else {
		return res.status(403).json("あなたは自分のアカウントの時のみ情報を更新できます。");
	}
})

//ユーザ情報の削除
router.delete("/:id", async (req, res) => {
	if (req.body.userId === req.params.id || req.body.isAdmin) { //req.params.id: URLに含まれるid
		try {
			const user = await User.findByIdAndDelete(req.params.id);
			res.status(200).json("ユーザ情報が削除されました");
		} catch (err) {
			return res.status(500).json(err);
		}
	} else {
		return res.status(403).json("あなたは自分のアカウントの時のみ情報を削除できます。");
	}
})

//ユーザ情報の取得
router.get("/:id", async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		const { password, updatedAt , ...other} = user._doc; //password, updatedAt以外の情報をotherに代入
		res.status(200).json(other);
	} catch (err) {
		return res.status(500).json(err);
	}
})

module.exports = router;