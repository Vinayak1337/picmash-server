import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PostSchema = new Schema({
	userid: {
		type: String,
		required: true,
		unique: false,
	},
	name: {
		type: String,
		required: true,
		unique: false,
	}, 
	imageUrl: {
		type: String,
		required: false,
		unique: false,
	},
	height: {
		type: String,
		required: false,
		unique: false,
	},
	width: {
		type: String,
		required: false,
		unique: false,
	},
	message: {
		type: String,
		required: false,
		unique: false,
	}, 
	alt: {
		type: String,
		required: false,
		unique: false,
	},
	postedOn: {
		type: Date,
		default: Date.now,
	}, 
	title: {
		type: String,
		required: false,
	}
}, { minimize: false });

export default mongoose.model('posts', PostSchema);