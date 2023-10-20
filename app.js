// RESTful APIs
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fs = require('fs');

const UserRouter = require('./src/Routes/user.js');
const ImagesRouter = require('./src/Routes/images.js');
const PostRouter = require('./src/Routes/posts.js');
const VerifyRouter = require('./src/Routes/verify.js');
const SECRETS = require('./src/util.js');

const app = express();

app.use(
	cors({
		origin: (origin, cb) => cb(null, origin)
	})
);
app.use(bodyParser.json());

app.use('/user', UserRouter);
app.use('/posts', PostRouter);
app.use('/verify', VerifyRouter);
app.use('/images', ImagesRouter);

app.get('/', (_req, res) => {
	const html = fs.readFileSync('./dist/index.html', 'utf8');
	res.send(html);
});

mongoose
	.connect(SECRETS.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true
	})
	.then(() => {
		console.log('✅ Connected to database.');

		app.listen(SECRETS.PORT, () => {
			console.log(`✅ Connected to port ${SECRETS.PORT}.`);
		});
	})
	.catch(console.error);
