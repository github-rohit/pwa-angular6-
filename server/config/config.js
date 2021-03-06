const env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
	const config = require('./config.json');
	var envConfig = config[env];

	Object.keys(envConfig).forEach((key) => {
		process.env[key] = envConfig[key];
	});
}

module.exports = {
    getDbConnectionString: function(){	
		return process.env.MONGODB_URI;
    },
	"USER_STATUS": {
		"PENDING": "PENDING",
		"ACTIVE": "ACTIVE"
	},
	"POST_STATUS": {
		"DRAFT": "DRAFT",
		"SCHEDULE": "DRAFT",
		"PUBLISHED": "PUBLISHED"
	}	
}