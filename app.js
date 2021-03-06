const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fs = require('fs');

const UserRouter = require('./src/Routes/user.js');
const ImagesRouter = require('./src/Routes/images.js');
const PostRouter = require('./src/Routes/posts.js');
const VerifyRouter = require('./src/Routes/verify.js');
dotenv.config();

const app = express();

app.use(cors({
	origin: (origin, cb) => cb(null, origin),
}));
app.use(bodyParser.json());


app.use('/user', UserRouter);
app.use('/posts', PostRouter);
app.use('/verify', VerifyRouter);
app.use('/images', ImagesRouter);

app.get('/', (_req, res) => {
	const html = fs.readFileSync('./dist/index.html', 'utf8');
	res.send(html);
});

mongoose.connect(process.env.URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true,
})
	.then(() => {
		console.log('✅ Connected to database.');

		app.listen(process.env.PORT || 8080, () => {
			console.log(`✅ Connected to port ${process.env.PORT || 8080}.`);
		});
	})
	.catch(console.error);
