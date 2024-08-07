const router = require("express").Router(); //ルーティング設定

router.get("/", (req, res) => {
	res.send("auth router")
})

module.exports = router;