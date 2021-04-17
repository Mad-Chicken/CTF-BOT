const Discord = require('discord.js');
const fs = require('fs');
module.exports = {
	name: 'input',
    description: 'input flag',
	args: true,
	usage: '<flag>',
	execute(message, args) {
		message.channel.send(` : ${args}`);
        const mentionHook = new Discord.WebhookClient("833088941166952489", "qCLEk2Tm8qRZs3Qph0wR4-ghFvbHfWgOEiCRHZDaSMliS-rcgWWTXB4d65ZbLLJ5lQ3x");
        // get user data
        fs.readFile('./files/user_flags.json', 'utf8', (err, data) => {
            if (err) {
                console.log(`Error reading file from disk: ${err}`);
            } else {     
                const users = JSON.parse(data);
                for (var user in users) {
                    if (users.hasOwnProperty(key)) {           
                        console.log(user, users[user]);
                    }
                }
            }
        });
        // get flags
        fs.readFile('./files/flags.json', 'utf8', (err, data) => {
            if (err) {
                console.log(`Error reading file from disk: ${err}`);
            } else {     
                const flags = JSON.parse(data);
                flags.forEach(flag => {
                    mentionHook.send(`${flag}`);
                });
            }
        });
	},
};
