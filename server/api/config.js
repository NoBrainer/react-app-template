const express = require('express');
const router = express.Router();

/* Download the default config yaml */
router.get('/download', (req, res, next) => {
	//TODO: Have this file somewhere accessible since everything in /src is compiled into /build for production.
	res.download('../src/assets/config/default.yaml');
});

module.exports = router