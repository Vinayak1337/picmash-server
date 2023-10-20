const dotenv = require('dotenv');
dotenv.config();

const SECRETS = {
	MONGODB_URI: process.env.MONGODB_URI,
	PORT: process.env.PORT || 5000,
	BASE_URL: process.env.BASE_URL || 'http://localhost:5000'
};

module.exports = SECRETS;
