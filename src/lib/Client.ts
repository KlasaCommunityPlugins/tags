import { Client } from 'klasa';
import path from 'path';

Client.defaultGuildSchema
	.add('tags', 'any', { array: true });

export default class TagsClient extends Client {

	/**
	 * Constructs the klasa-tags client
	 * @since 0.0.1
	 * @param {ClientOptions} config The config to pass to the new client
	 */
	constructor(config) {
		super(config);
		// @ts-ignore
		this.constructor[Client.plugin].call(this);
	}

	static [Client.plugin]() {
		const typedThis = this as unknown as TagsClient;
		const coreDirectory = path.join(__dirname, '../');

		// @ts-ignore
		typedThis.commands.registerCoreDirectory(coreDirectory);
		// @ts-ignore
		typedThis.events.registerCoreDirectory(coreDirectory);
	}

}
