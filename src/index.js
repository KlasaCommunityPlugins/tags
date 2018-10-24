const { Client: { plugin } } = require('klasa');

module.exports = {
	TagsClient: require('./lib/Client'),
	Client: require('./lib/Client'),
	[plugin]: require('./lib/Client')[plugin]
};
