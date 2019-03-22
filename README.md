# Tags [![Build Status](https://dev.azure.com/klasacommunityplugins/Plugins/_apis/build/status/Tags?branchName=master)](https://dev.azure.com/klasacommunityplugins/Plugins/_build/latest?definitionId=6&branchName=master)

A Klasa plugin to seamlessly replicate no-mention-spam behavior in Klasa bots

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

1. ???... Enjoy!

## License

This project is under the [MIT](https://github.com/KlasaCommunityPlugins/tags/blob/master/LICENSE) license.
