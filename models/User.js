const mongoose = require("mongoose");

const  UserSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			min: 3,
			max: 25,
			unique: true,
		},
		email :{
			type: String,
			required: true,
			max: 50,
			unique: true,
		},
		password:  {
			type: String,
			required: true,
			min: 6,
			max: 50,
		},
		profilePicture: {
			type: String, //画像パスなのでString
			default: ""
		},
		coverPicture: {
			type: String,
			defult: ""
		},
		followers: {
			type: Array,
			default: [],
		},
		followings: {
			type: Array,
			default: [],
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
		decs: { //概要欄
			type: String,
			max: 70,
		},
		city: {
			type: String,
			max: 50,
		},
	},
	{ timestamps: true } //データを格納したタイムスタンプ
);