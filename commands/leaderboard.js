const fs = require('fs');
module.exports = {
    name: 'leaderboard',
	aliases: ['leader', 'top'],
	usage: '<>',
	description: 'Prints the leaderboard',
	guildOnly: true,
	devRole: true,
    execute(message) {
		// Delete command creating leaderboard
		message.delete();
		try {
            var users_raw = fs.readFileSync('./files/user_flags.json', 'utf8');
        } catch(e) {
            console.log('[!] Error:', e.stack);
        }
		console.log(users_raw);
		var users = JSON.parse(users_raw);
		let output_data = "Leaderboard";
		for (let user in users) {
            if (users.hasOwnProperty(user)) {     
				console.log(`[~] ${user} ${users[user]}`);      
                console.log(`[~] ${user} ${users[user].length}`);
				output_data.concat(`\n${user}\t`, users[user].length);
            }
        }
		message.channel.send(`
		${output_data}
		
		`).then(sentEmbed => {
		    sentEmbed.react("🚱")
		});
    },
};