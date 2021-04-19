const fs = require('fs');
module.exports = {
    name: 'leaderboard',
	aliases: ['leader', 'top'],
	usage: '<>',
	description: 'Prints the leaderboard',
	guildOnly: true,
	devRole: true,
    execute(message) {
		console.log("[+] Creating leaderboard");   
		// Delete command creating leaderboard
		message.delete();
		try {
            var users_raw = fs.readFileSync('./files/user_flags.json', 'utf8');
        } catch(e) {
            console.log('[!] Error:', e.stack);
        }
		var users = JSON.parse(users_raw);
		let leaderboard_array = [];
		for (let user in users) {
            if (users.hasOwnProperty(user)) {     
				leaderboard_array.push([users[user].length, user]);
            }
        }
		leaderboard_array_sorted = leaderboard_array.sort().reverse();
				
		const embed = {
			"title": "LEADERBOARD",
			"url": "https://cdn.discordapp.com/avatars/437718810137460737/be423c1b816da483feb907661d34f820.png",
			"color": 13311004,
			"timestamp": new Date(),
			"thumbnail": {
				"url": "https://cdn.discordapp.com/avatars/437718810137460737/be423c1b816da483feb907661d34f820.png"
			},
			"author": {
				"name": "CTF-BOT",
				"url": "https://cdn.discordapp.com/avatars/437718810137460737/be423c1b816da483feb907661d34f820.png",
				"icon_url": "https://cdn.discordapp.com/avatars/437718810137460737/be423c1b816da483feb907661d34f820.png"
			}
		};
		message.channel.send("", { embed });

		for (let user in leaderboard_array_sorted) {
			console.log(`[~] ${leaderboard_array_sorted[user][1]}\t\tFlags: ${[user][0]}`);      
			message.channel.send({embed: {
				color: 'RANDOM',
				fields: [{
					name: `Flags collected: ${leaderboard_array_sorted[user][0]}`,
					value: `<@${leaderboard_array_sorted[user][1]}>`
				  }
				]
			  }
			});
        }
    },
};