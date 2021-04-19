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
			"description": "-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-",
			"url": "https://discordapp.com",
			"color": 10977743,
			"timestamp": new Date(),
			"footer": {
			  "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
			  "text": "footer text"
			},
			"thumbnail": {
			  "url": "https://cdn.discordapp.com/embed/avatars/0.png"
			},
			"author": {
			  "name": "author name",
			  "url": "https://discordapp.com",
			  "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
			}
		  };
		  message.channel.send("", { embed });

		for (let user in leaderboard_array_sorted) {
			console.log(`${user}  ${leaderboard_array_sorted[user].length}`);
			message.channel.send({embed: {
				color: 'RANDOM',
		//		description: "-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-",
				fields: [{
					name: `<@${user}>`,
					value: `Flags collected: ${leaderboard_array_sorted[user].length}`
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