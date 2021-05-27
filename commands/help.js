module.exports = {
	name: 'help',
	description: 'help!',
	aliases: ['commands', 'whatis'],
	guildOnly: true,
	devRole: true,
	usage: '[command name]',
	execute(message, args) {
		message.delete();
		message.channel.send({embed: {
			color: 'RANDOM',
			title: "CTF Help Commands",
			url: "https://google.com",
			description: "Suffix: >>\n",
			fields: [
				{
					name : "Input Commands",
					value : "When you find a flag **dm** them to the bot.\n*Syntax* **input** ***<flag>***\nExample: >> input flag(example_flag)"
				},
				{
					name : "Server Command",
					value : "Get some server info.\n*Syntax* **server**"
				},
				{
					name : "Other Commands",
					value : "*Syntax* **<command>**"
				}
			],
			timestamp: new Date(),
		  }
		});
	},
};
