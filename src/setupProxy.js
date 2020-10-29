const {createProxyMiddleware} = require('http-proxy-middleware');

const apiPort = process.env.REACT_APP_API_PORT || 3001;

// Simply by including this file, create-react-app will use this file.
// The React front-end will fallback to the 'target' host below.
// This allows local development to point to the backend API.
const proxyOptions = {target: 'http://localhost:' + apiPort, changeOrigin: true};
module.exports = function(app) {
	app.use('/api', createProxyMiddleware(proxyOptions));
};