import { Command, KlasaMessage } from 'klasa';
import { Util }  from 'discord.js';

export default class TagCommand extends Command {

	public constructor(client, store, file, directory) {
		super(client, store, file, directory, {
			usage: '<add|remove|source|list|show:default> (tag:string) [content:...string]',
			usageDelim: ' ',
			subcommands: true,
			description: 'Shows tags.'
		});
		this.createCustomResolver('string', (arg, possible, message, [action]) => {
			if (action === 'list') return arg;
			return this.client.arguments.get('string').run(arg, possible, message);
		});
	}

	public async add(message: KlasaMessage, [tag, content]: string[]): Promise<KlasaMessage | KlasaMessage[]> {
		await message.guild.settings.update('tags', [...message.guild.settings['tags'], [tag, content]], { action: 'overwrite' });
		return message.send(`Added \`${tag}\` tag as: \`\`\`${Util.escapeMarkdown(content)}\`\`\``);
	}

	public async remove(message: KlasaMessage, [tag]: string[]): Promise<KlasaMessage | KlasaMessage[]> {
		const filtered = message.guild.settings['tags'].filter(([name]) => name !== tag);
		await message.guild.settings.update('tags', filtered, { action: 'overwrite' });
		return message.send(`Removed \`${tag}\` tag`);
	}

	public list(message: KlasaMessage): Promise<KlasaMessage | KlasaMessage[]> {
		return message.send(`Tags for this guild are: ${message.guild.settings['tags'].map(key => key[0])}`);
	}

	public show(message: KlasaMessage, [tag]: string[]): Promise<KlasaMessage | KlasaMessage[]> {
		const emote = message.guild.settings['tags'].find(([name]) => name === tag);
		if (!emote) return undefined;
		return message.send(emote[1]);
	}

	public source(message: KlasaMessage, [tag]: string[]): Promise<KlasaMessage | KlasaMessage[]> {
		const emote = message.guild.settings['tags'].find(([name]) => name === tag);
		if (!emote) return undefined;
		return message.send(`\`\`\`${Util.escapeMarkdown(emote[1])}\`\`\``);
	}

}
