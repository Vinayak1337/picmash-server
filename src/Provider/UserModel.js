const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	createdOn: {
		type: Date,
		default: Date.now,
	},
	avatar: {
		type: String,
		default: '',
	},
	displayName: {
		type: String,
		required: true,
	},
	imagesPosted: {
		type: Number,
		default: 0,
	},
	totalLikes: {
		type: Number,
		default: 0,
	},
}, { minimize: false });

module.exports = mongoose.model('users', UserSchema);