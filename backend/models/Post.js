const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		desc: { //投稿内容
			type: String,
			max: 500,
		},
		img: {
			type: String,
		},
		likes: {
			type: Array,
			default: [],
		},
	},
	{ timestamps: true },
);

module.exports = mongoose.model("Post", PostSchema);