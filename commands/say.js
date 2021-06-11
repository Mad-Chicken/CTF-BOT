module.exports = {
    name: 'say',
	aliases: ['tell', 'talk'],
	usage: '<message>',
	description: 'Get meme',
	guildOnly: true,
	devRole: true,
    execute(message, args) {
		console.log("[+] Used say command");
		message.delete();
		if (args.length > 0 ) {
			message.channel.send(args.join(' '));
		}
    },
};
