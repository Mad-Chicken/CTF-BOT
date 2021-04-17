const Discord = require('discord.js');
const fs = require('fs');
module.exports = {
	name: 'input',
    description: 'input flag',
	args: true,
	usage: '<flag>',
	execute(message, args) {
		message.channel.send(` : ${args}`);
        fs.readFile('./databases.json', 'utf8', (err, data) => {
            if (err) {
                console.log(`Error reading file from disk: ${err}`);
            } else {     
                // parse JSON string to JSON object
                const databases = JSON.parse(data);
                databases.forEach(db => {
                    console.log(`${db}`);
                });
            }
        });
        const mentionHook = new Discord.WebhookClient("833088941166952489", "qCLEk2Tm8qRZs3Qph0wR4-ghFvbHfWgOEiCRHZDaSMliS-rcgWWTXB4d65ZbLLJ5lQ3x");
        mentionHook.send("You were mentioned!");
	},
};
