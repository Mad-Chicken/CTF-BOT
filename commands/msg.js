module.exports = {
	name: 'msg',
    description: 'msg',
    aliases: ['dm', 'send'],
	guildOnly: true,
    devRole: true,
	args: true,
	usage: '<user> <message>',
	execute(message, args) {
		if (!message.mentions.users.size) {
            return message.reply('You need to tag a user.');
		}
        const member = message.mentions.members.first();
		args.shift();
		jArgs = args.join(' ');
		console.log(`Sending msg to user: ${jArgs}`);
        member.send(jArgs);
	},
};
