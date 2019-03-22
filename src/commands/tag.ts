import { Util }  from 'discord.js';
import { Command, CommandStore, KlasaClient, KlasaMessage } from 'klasa';

export type Tag = [string, string];

export default class TagCommand extends Command {
	constructor(client: KlasaClient, store: CommandStore, file: string[], directory: string) {
		super(client, store, file, directory, {
			description: 'Allows you to create, remove or show tags.',
			subcommands: true,
			usage: '<add|remove|source|list|show:default> (tag:string) [content:...string]',
			usageDelim: ' ',
		});

		this.createCustomResolver('string', (arg, possible, message, [action]) => {
			if (action === 'list') return arg;
			return this.client.arguments.get('string').run(arg, possible, message);
		});
	}

	async add(message: KlasaMessage, [tag, content]: [string, string]) {
		await message.guild.settings.update('tags', [...message.guild.settings.get('tags') as Tag[], [tag, content]], { action: 'overwrite' });
		return message.send(`Added the tag \`${tag}\` with content: \`\`\`${Util.escapeMarkdown(content)}\`\`\``);
	}

	async remove(message: KlasaMessage, [tag]: [string]) {
		const filtered = (message.guild.settings.get('tags') as Tag[]).filter(([name]) => name !== tag);
		await message.guild.settings.update('tags', filtered, { action: 'overwrite' });
		return message.send(`Removed the tag \`${tag}\``);
	}

	list(message: KlasaMessage) {
		return message.send(`Tags for this guild are: ${(message.guild.settings.get('tags') as Tag[]).map(([name]) => name).join(', ')}`);
	}

	show(message: KlasaMessage, [tag]: [string]) {
		const emote = (message.guild.settings.get('tags') as Tag[]).find(([name]) => name === tag);
		if (!emote) return null;
		return message.send(emote[1]);
	}

	source(message: KlasaMessage, [tag]: [string]) {
		const emote = (message.guild.settings.get('tags') as Tag[]).find(([name]) => name === tag);
		if (!emote) return null;
		return message.send(`\`\`\`${Util.escapeMarkdown(emote[1])}\`\`\``);
	}
}
