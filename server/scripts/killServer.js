#!/usr/bin/env node
'use strict';

const fkill = require('fkill');
const port = process.env.PORT;

fkill(':' + port, {force: true})
	.then(() => {
		if (process.env.NODE_ENV === 'development') console.log("Killed process on port " + port);
	})
	.catch(() => {
		if (process.env.NODE_ENV === 'development') console.log("Failed to kill process on port " + port);
	});