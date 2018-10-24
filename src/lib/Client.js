const { Client } = require('klasa');
const path = require('path');

Client.defaultGuildSchema
	.add('tags', 'any', { array: true });

class TagsClient extends Client {

	/**
	 * Constructs the klasa-tags client
	 * @since 0.0.1
	 * @param {ClientOptions} config The config to pass to the new client
	 */
	constructor(config) {
		super(config);
		this.constructor[Client.plugin].call(this);
	}

	static [Client.plugin]() {
		const coreDirectory = path.join(__dirname, '../');

		this.commands.registerCoreDirectory(coreDirectory);
		this.events.registerCoreDirectory(coreDirectory);
	}

}

module.exports = TagsClient;
