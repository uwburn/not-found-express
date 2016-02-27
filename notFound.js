var HttpError = require('http-error');

module.exports = function(options) {
	options = options || {};
	options.message = options.message || 'Not found';

	return function(req, res, next) {
		next(HttpError.notFound(options.message));
	}
}

