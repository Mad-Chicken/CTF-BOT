const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const client = new Discord.Client();
module.exports = {
	name: 'audio',
    description: 'Join and play hint',
	guildOnly: true,
	args: false,
	ctf_user: true,
	usage: 'audio',
	execute(message, args) {
		if (message.member.voice.channel) {
			const connection = message.member.voice.channel.join().then((connection) => {
				connection.play('/home/node/commands/audio.mp3');
			});
//			const dispatcher = connection.play('audio.mp3');
		}
	},
};
