const Discord = require('discord.js');
const fs = require('fs');
module.exports = {
	name: 'input',
    description: 'input flag',
	args: true,
	usage: '<flag>',
	execute(message, args) {
//		message.channel.send(`${message.author.id} : ${args}`);
        var user_id = message.author.id;
        const mentionHook = new Discord.WebhookClient("833088941166952489", "qCLEk2Tm8qRZs3Qph0wR4-ghFvbHfWgOEiCRHZDaSMliS-rcgWWTXB4d65ZbLLJ5lQ3x");
        var write2file = false;
        // Gets user data from the file
        try {
            var users_raw = fs.readFileSync('./files/user_flags.json', 'utf8');
        } catch(e) {
            console.log('[!] Error:', e.stack);
        }
        var users = JSON.parse(users_raw)
        // Adds user if they do not exist in the list
        if (user_id in users) {
            console.log(`[=] ${user_id} already in dict`);
        } else {
            console.log(`[+] New user ${user_id}, adding to list`);
            users[user_id] = [];
            write2file = true;
        }
// For testing
        for (let user in users) {
            if (users.hasOwnProperty(user)) {           
                console.log(`[~] ${user} ${users[user]}`);
            }
        }
        console.log('\n');
        // get flags
        try {
            var flags_raw = fs.readFileSync('./files/flags.json', 'utf8');
        } catch(e) {
            console.log('[!] Error:', e.stack);
        }
        var flags = JSON.parse(flags_raw);

        console.log(users[user_id]);
        
        for (let flag in users[user_id]) {
            if (users[user_id].hasOwnProperty(flag)) {    
                console.log(flag);
                console.log(`[~] ${users[user_id][flag]} ${users[user_id]}`);
            }
        }
        console.log(`[=] ${user_id} attempting to capture flag: ${args[0]}`);
        // test if a flag and/or new flag to the user
        for (let flag in flags) {
            console.log(flags[flag]);
            console.log(args[0]);
            console.log(users[user_id].includes(args[0]));
            //if (args == flags[flag] && !(flags[flag] in users[user_id])) {
            if (args[0] == flags[flag] && !(users[user_id].includes(args[0]))) {
                console.log(`[+] Adding flag: ${flags[flag]} to user: ${user_id}`);
                // Send webhook
                mentionHook.send(`<@${user_id}> has captured a flag!`);
                Q = users[user_id];
                Q.push([flags[flag]]);
                users[user_id] = Q;
                write2file = true;
            }
        }
        // write flag file
        if (write2file == true) {
            fs.writeFile('./files/user_flags.json', JSON.stringify(users), 'utf8', (err) => {
                if (err) {
                    console.log(`[!] Error writing file users for ${user_id}: ${err}`);
                } else {
                    console.log(`[+] users written to file successfully!`);
                }
            });
        }
	},
};
