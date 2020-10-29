const express = require('express');
const router = express.Router();

/* Redirect to the react-app-template GitHub. */
router.get('/', function(req, res, next) {
	res.redirect("https://github.com/NoBrainer/react-app-template");
});

module.exports = router