var Devwebpack = require('./config/webpack.dev');
var Prodwebpack = require('./config/webpack.prod');

switch(process.env.NODE_ENV){
	case 'dev':
	module.exports = Devwebpack;
	break;
	case 'prod':
	module.exports = Prodwebpack;
	break;
	default:
	module.exports = Devwebpack;
}