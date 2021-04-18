const Discord = require('discord.js');
const fs = require('fs');
module.exports = {
	name: 'input',
    description: 'input flag',
	args: true,
	usage: '<flag>',
	execute(message, args) {
		message.channel.send(`${message.author.id} : ${args}`);
        var user_id = message.author.id;
        const mentionHook = new Discord.WebhookClient("833088941166952489", "qCLEk2Tm8qRZs3Qph0wR4-ghFvbHfWgOEiCRHZDaSMliS-rcgWWTXB4d65ZbLLJ5lQ3x");
        // get user data
        try {
            var users_raw = fs.readFileSync('./files/user_flags.json', 'utf8');
        } catch(e) {
            console.log('Error:', e.stack);
        }
        var users = JSON.parse(users_raw)
        if (user_id in users) {
            console.log(`[=] ${user_id} already in dict`);
        } else {
            console.log(`[+] New user ${user_id}, adding to list`);
            users[user_id] = []
        }
        for (let user in users) {
            if (users.hasOwnProperty(user)) {           
                console.log(`[~] ${user} ${users[user]}`);
            }
        }
        // get flags
        try {
            var flags_raw = fs.readFileSync('./files/flags.json', 'utf8');
        } catch(e) {
            console.log('Error:', e.stack);
        }
        var flags = JSON.parse(flags_raw)
        for (let flag in flags) {
            if (args == flag) {
                mentionHook.send(`${flag}`);
                console.log(`[+] Adding flag: ${flag} to user: ${user_id}`);
                Q = users[user_id];
                Q.push([flag]);
                users[user_id] = Q
            }
        }
        // write flag file
        fs.writeFile('./user.json', data, 'utf8', (err) => {
            if (err) {
                console.log(`Error writing file: ${err}`);
            } else {
                console.log(`File is written successfully!`);
            }
        });
	},
};
