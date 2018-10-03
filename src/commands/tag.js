const { Command } = require('klasa');
const { Util } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			usage: '<add|remove|source|show:default> <tag:str> [content:...str]',
			usageDelim: ' ',
			subcommands: true,
			description: 'Shows tags.'
		});
	}

	async add(message, [tag, content]) {
		await message.guild.settings.update('tags', [...message.guild.settings.tags, [tag, content]], { action: 'overwrite' });
		return message.send(`Added \`${tag}\` tag as: \`\`\`${Util.escapeMarkdown(content)}\`\`\``);
	}

	async remove(message, [tag]) {
		const filtered = message.guild.settings.tags.filter(([name]) => name !== tag);
		await message.guild.settings.update('tags', filtered, { action: 'overwrite' });
		return message.send(`Removed \`${name}\` tag`);
	}

	show(message, [tag]) {
		const emote = message.guild.settings.tags.find(([name]) => name === tag);
		if (!emote) return;
		return message.send(emote[1]);
	}

	source(message, [tag]) {
		const emote = message.guild.settings.tags.find(([name]) => name === tag);
		if (!emote) return;
		return message.send(`\`\`\`${Util.escapeMarkdown(emote[1])}\`\`\``);
	}

};
