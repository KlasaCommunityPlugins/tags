// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Client as KlasaClient } from 'klasa';

export { default as Client } from './lib/Client';
// @ts-ignore
exports[KlasaClient.plugin] = Client[KlasaClient.plugin];
