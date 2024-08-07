const router = require("express").Router(); //ルーティング設定

router.get("/", (req, res) => {
	res.send("user router")
})

module.exports = router;