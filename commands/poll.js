const Discord = require('discord.js');
module.exports = {
        name: 'poll',
        aliases: ['vote'],
        devRole: 'true',
        guildOnly: true,
        args: true,
        description: 'Create a poll',
        usage: '[<message>] [<option-0>] [<option-1>] [<option-2>] [<option-n>]',
        execute(message, args) {
	    const pollMessage = args[0];
	    const options = [];
		message.delete();
		const alfa = ["🇦","🇧","🇨","🇩","🇪","🇫","🇬","🇭","🇮"];
		args.shift();
		pollMSG = "";
	    for (const [i, value] of args.entries()) {
		console.log(`${i} : ${alfa[i]}`);
	        options.push(alfa[i]);
		pollMSG += `${alfa[i]} : ${value}\n`;
	    }
		console.log(pollMSG);
            const embed = {
			"title": `**${pollMessage}**`,
			"timestamp": new Date(),
			"thumbnail": {
				"url": "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipground.com%2Fimages%2Fpoll-clipart-6.jpg&f=1&nofb=1"
			},
			"description": pollMSG
		};
		message.channel.send("", { embed }).then(embedMessage => {
			for (const emoji in options) {
				console.log(options[emoji]);
				embedMessage.react(options[emoji]);
			}
		});
        },
};
