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
            var users = fs.readFile('./files/user_flags.json', 'utf8');
            console.log(JSON.parse(data));  
        } catch(e) {
            console.log('Error:', e.stack);
        }
/*
        fs.readFile('./files/user_flags.json', 'utf8', (err, data) => {
            if (err) {
                console.log(`Error reading file from disk: ${err}`);
            } else {     
                var users = JSON.parse(data);
                                                        // Return out of area
            }
        });
        */
        if (user_id in users) {
            console.log(`[=] ${user_id} already in dict`);
        } else {
            console.log(`[+] New user ${user_id}, adding to list`);
            users[user_id] = []
        }
        for (var user in users) {
            if (users.hasOwnProperty(user)) {           
                console.log(`[~] ${user} ${users[user]}`);
            }
        }
        // get flags
        fs.readFile('./files/flags.json', 'utf8', (err, data) => {
            if (err) {
                console.log(`Error reading file from disk: ${err}`);
            } else {     
                const flags = JSON.parse(data);
                flags.forEach(flag => {
                    if (args == flag) {
                        mentionHook.send(`${flag}`);
                        console.log(`[+] Adding flag to user ${user}`);
                        users.push(user_id, users[user_id].push(args))
                    }
                });
                /*
                if (args in flags) {
                    mentionHook.send(`${flag}`);
                }
                flags.forEach(flag => {
                    mentionHook.send(`${flag}`);
                });
                */
            }
        });
	},
};
