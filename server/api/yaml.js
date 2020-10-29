const express = require('express');
const yaml = require('js-yaml');
const {logger} = require('../common/logger');

const router = express.Router();

/* POST JSON string to serialize into YAML */
router.get('/serialize', (req, res, next) => {
	//TODO: change from GET to POST
	//TODO: check for bad requests and such
	serialize(req.body)
		.then((response) => {
			res.status(200).send(response);
		})
		.catch((error) => {
			logger.error(error.message);
			res.status(500).json({
				error: error.message,
			});
		});
});

/* POST YAML string to deserialize into JSON */
router.get('/deserialize', (req, res, next) => {
	//TODO: change from GET to POST
	//TODO: check for bad requests and such
	deserialize(req.body)
		.then((response) => {
			res.status(200).send(response);
		})
		.catch((error) => {
			logger.error(error.message);
			res.status(500).json({
				error: error.message,
			});
		});
});

function serialize(json) {
	return new Promise((resolve, reject) => {
		try {
			const text = yaml.safeDump(json);
			resolve(text);
		} catch(e) {
			reject(e);
		}
	});
}

function deserialize(text) {
	return new Promise((resolve, reject) => {
		try {
			const json = yaml.safeLoad(text);
			resolve(json);
		} catch(e) {
			reject(e);
		}
	});
}

module.exports = router