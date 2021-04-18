module.exports = {
    name: 'leaderboard',
	aliases: ['leader', 'top'],
	usage: '<>',
	description: 'Prints the leaderboard',
	guildOnly: true,
	devRole: true,
    execute(message) {
		message.delete();
		message.channel.send(`
		𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐭𝐨 𝐭𝐡𝐞 𝐇𝐚𝐧𝐠𝐨𝐮𝐭 𝐒𝐞𝐫𝐯𝐞𝐫

		Read info about commands & the server at #📋info 
		
		`).then(sentEmbed => {
		    sentEmbed.react("🧠")
		    sentEmbed.react("🎵")
			sentEmbed.react('🚱')
		});
    },
};