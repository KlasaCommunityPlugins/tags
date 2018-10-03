const { Event } = require('klasa');

module.exports = class extends Event {

	constructor(...args) {
		super(...args, { event: 'unknownCommand' });
	}

	async run(message, command) {
		const tagCommand = this.client.commands.get('tag');
		const timer = new Stopwatch();

		if (this.client.options.typing) message.channel.startTyping();
		try {
			await this.client.inhibitors.run(message, tagCommand);
			try {
				const commandRun = tagCommand.show(message, [command]);
				timer.stop();
				const response = await commandRun;
				this.client.finalizers.run(message, response, timer);
				this.client.emit('commandSuccess', message, message.command, message.params, response);
			} catch (error) {
				this.client.emit('commandError', message, message.command, message.params, error);
			}
		} catch (response) {
			this.client.emit('commandInhibited', message, message.command, response);
		}
		if (this.client.options.typing) message.channel.stopTyping();
	}

};
