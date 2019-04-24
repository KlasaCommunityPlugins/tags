// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Client, KlasaClientOptions } from 'klasa';
import { join } from 'path';

Client.defaultGuildSchema
	.add('tags', 'any', { array: true });

/**
 * The client for handling everything. See {@tutorial GettingStarted} for more information how to get started using this class.
 * @extends external:KlasaClient
 * @tutorial GettingStarted
 */
export class TagsClient extends Client {
	/**
	 * Constructs the tags client
	 * @since 0.0.1
	 * @param {external:KlasaClientOptions} [config] The config to pass to the new client
	 */
	constructor(config?: KlasaClientOptions) {
		super(config);
		// @ts-ignore
		this.constructor[Client.plugin].call(this);
	}

	static [Client.plugin](this: TagsClient) {
		const coreDirectory = join(__dirname, '../');

		// @ts-ignore
		this.commands.registerCoreDirectory(coreDirectory);
		// @ts-ignore
		this.events.registerCoreDirectory(coreDirectory);
	}
}
