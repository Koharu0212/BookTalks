const router = require("express").Router(); //ルーティング設定
const Post =  require("../models/Post");

//投稿を作成する
router.post("/", async (req, res)  => {
	const newPost = new Post(req.body);
	try {
		const savedPost = await newPost.save();  //DBに保存
		return res.status(200).json(savedPost);
	} catch (err) {
		return res.status(500).json(err);
	}
})

//投稿を編集する
router.post("/:id", async (req, res) => { //id: 投稿のID
	try {
		const post = await Post.findById(req.params.id); //URLのidを指定する
		if (post.userId === req.body.userId) {
			await post.updateOne({
				$set: req.body,
			});
			return res.status(200).json("投稿の編集が完了しました");
		} else {
			return res.status(403).json("あなたは他の人の投稿を編集できません");
		}
	} catch (err) {
		return res.status(403).json(err);
	}
})

//投稿を削除する
router.delete("/:id", async (req, res) => { //id: 投稿のID
	try {
		const post = await Post.findById(req.params.id); //URLのidを指定する
		if (post.userId === req.body.userId) {
			await post.deleteOne();
			return res.status(200).json("投稿を削除しました");
		} else {
			return res.status(403).json("あなたは他の人の投稿を削除できません");
		}
	} catch (err) {
		return res.status(403).json(err);
	}
})

//特定の投稿を取得する
router.get("/:id", async (req, res) => { //id: 投稿のID
	try {
		const post = await Post.findById(req.params.id); //URLのidを指定する
		return res.status(200).json(post);
	} catch (err) {
		return res.status(403).json(err);
	}
})

//特定の投稿にいいねを押す
router.put("/:id/like", async (req, res) => { 
	try {
		const post = await Post.findById(req.params.id);  //いいねする投稿
		if (!post.likes.includes(req.body.userId)) { //まだいいねを押していない場合、いいねを押せる
			await post.updateOne({
				$push: {
					likes: req.body.userId,
				},
			});
			return res.status(200).json("投稿にいいねを押しました");
		} else {
			//いいねしているユーザIDを取り除く
			await post.updateOne({
				$pull: {
					likes: req.body.userId,
				},
			});
			return res.status(403).json("投稿のいいねを外しました");
		}
	} catch (err) {
		return res.status(500).json(err);
	}
})

module.exports = router;