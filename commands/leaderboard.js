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
//		let output_data = "Leaderboard";
		let leaderboard_array = [];
		for (let user in users) {
            if (users.hasOwnProperty(user)) {     
				console.log(`[~] ${user} ${users[user]}`);      
                console.log(`[~] ${user} ${users[user].length}`);
				leaderboard_array.push([users[user].length, user]);
//				output_data += `\n${user}\t${users[user].length}`;
            }
        }
		leaderboard_array_sorted = leaderboard_array.sort().reverse();
				
		const embed = {
			"title": "LEADERBOARD",
			"url": "https://cdn.discordapp.com/avatars/437718810137460737/be423c1b816da483feb907661d34f820.png",
			"color": 10977743,
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
			console.log(`${leaderboard_array_sorted[user][1]} \tflags: ${[user][0]}`);
			message.channel.send({embed: {
				color: 'RANDOM',
				fields: [{
					name: "",
					value: `<@${leaderboard_array_sorted[user][1]}> \nFlags collected: ${leaderboard_array_sorted[user][0]}`
				  }
				]
			  }
			});
        }

/*
		message.channel.send(`
		${output_data}
		
		`).then(sentEmbed => {
		    sentEmbed.react("🚱")
		});
*/
    },
};