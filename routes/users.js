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

//ユーザのフォロー
router.put("/:id/follow", async (req, res) => { //:idはフォローしたいid
	if (req.body.userId !== req.params.id){ //自分以外のidの場合、フォローできる
		try {
			const user = await User.findById(req.params.id);  //フォロー対象
			const currentUser = await User.findById(req.body.userId); //自分
			if (!user.followers.includes(req.body.userId)) { //フォロー対象のフォロワーでない場合、フォローできる
				await user.updateOne({
					$push: {
						followers: req.body.userId,
					}
				})
				await  currentUser.updateOne({
					$push:  {
						followings: req.params.id,
					}
				})
				return res.status(200).json("このユーザをフォローしました");
			} else {
				return res.status(403).json("あなたはすでにこのユーザをフォローしています");
			}
		} catch (err) {
			return res.status(500).json(err);
		}
	} else { //自分自身の場合
		return res.status(500).json("自分自身をフォローできません");
	}
})

//ユーザのアンフォロー
router.put("/:id/unfollow", async (req, res) => { //:idはアンフォローしたいid
	if (req.body.userId !== req.params.id){ //自分以外のidの場合、アンフォローできる
		try {
			const user = await User.findById(req.params.id);  //アンフォロー対象
			const currentUser = await User.findById(req.body.userId); //自分
			if (user.followers.includes(req.body.userId)) { //フォロワーに存在した場合、アンフォロー
				await user.updateOne({
					$pull: {
						followers: req.body.userId,
					}
				})
				await  currentUser.updateOne({
					$pull:  {
						followings: req.params.id,
					}
				})
				return res.status(200).json("このユーザのフォロー解除しました");
			} else {
				return res.status(403).json("あなたはこのユーザをフォローしていないためフォロー解除できません");
			}
		} catch (err) {
			return res.status(500).json(err);
		}
	} else { //自分自身の場合
		return res.status(500).json("自分自身をフォロー解除できません");
	}
})

module.exports = router;