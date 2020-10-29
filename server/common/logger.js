const expressWinston = require('express-winston');
const winston = require('winston');
const {transports, format} = require('winston');

const customFormat = format.printf(({level, message, timestamp}) => {
	return `[${timestamp} ${level.toUpperCase()}] - ${message}`;
});

function buildOpts(forHttp) {
	return {
		level: 'info',
		transports: getTransports(),
		format: format.combine(format.timestamp(), customFormat),
		msg: forHttp ? "HTTP {{res.statusCode}} - {{req.method}} {{req.url}} - {{res.responseTime}}ms" : undefined,
	};
}

function getTransports() {
	const transportsArray = [
		new transports.File({filename: 'app.log'}),
	];

	if (process.env.NODE_ENV !== 'production') {
		transportsArray.push(new transports.Console({
			format: format.combine(
				format.timestamp(),
				customFormat,
			),
		}));
	}
	return transportsArray;
}

module.exports = {
	logger: winston.createLogger(buildOpts()),
	httpLogger: expressWinston.logger(buildOpts(true)),
};