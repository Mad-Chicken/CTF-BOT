module.exports = {
	name: 'audio',
    description: 'Join and play hint',
	guildOnly: true,
	args: false,
	ctf_user: true,
	usage: 'audio',
	execute(message, args) {
		message.delete();
		console.log("[+] Someone has triggered the voice command");
		if (message.member.voice.channel) {
			const connection = message.member.voice.channel.join().then((connection) => {
				const dispatcher = connection.play('/home/node/commands/audio.mp3', { volume: 0.5});
				dispatcher.on('finish', () => {
					console.log('[=] Finished playing!');
					connection.disconnect();
				});
			});
		} else {
			message.member.send("You need to be in a voice channel");
		}
	},
};
