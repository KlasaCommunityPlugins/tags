<div>
	<br/>
	<p>
	  <a href="https://www.npmjs.com/package/@kcp/tags"><img src="https://img.shields.io/npm/v/@kcp/tags.svg?maxAge=3600" alt="NPM version" /></a>
		<a href="https://www.npmjs.com/package/@kcp/tags"><img src="https://img.shields.io/npm/dt/@kcp/tags.svg?maxAge=3600" alt="NPM downloads" /></a>
		<a href="https://packagephobia.now.sh/result?p=@kcp/tags"><img src="https://packagephobia.now.sh/badge?p=@kcp/tags" alt="Install Size"></a>
    <a href="https://dev.azure.com/klasacommunityplugins/Plugins/_build/latest?definitionId=6&branchName=master"><img src="https://dev.azure.com/klasacommunityplugins/Plugins/_apis/build/status/Tags?branchName=master" alt="Build Status"></a>
	</p>
	<p>
    <a href="https://nodei.co/npm/@kcp/tags"><img src="https://nodei.co/npm/@kcp/tags.png?downloads=true&stars=true" alt="NPM info"></a>
  </p>
</div>

# Tags

A Klasa plugin to add tag functionality to bots

## How To Use

1. Install the plugin.

```bash
npm i @kcp/tags

# If you use yarn
yarn add @kcp/tags
```

1. Use `@kcp/tags` in your client.

```js
const { Client } = require("klasa");
Client.use(require("@kcp/tags"));
```

If you use TypeScript

```ts
import { Client } from 'klasa';
import { Client as TagsClient } from '@kcp/tags';

Client.use(TagsClient);
```

2. ???... Enjoy!

## License

This project is under the [MIT](https://github.com/KlasaCommunityPlugins/tags/blob/master/LICENSE) license.
