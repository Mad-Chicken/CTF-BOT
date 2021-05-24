module.exports = {
	name: 'status',
    description: 'online status',
	guildOnly: true,
	args: true,
	devRole: true,
	usage: '<status>',
	execute(message, args) {
		if (args.join(' ') == "online") {
			//message.client.user.setStatus('online');
			message.client.user.setPresence({
				status: 'online'
			});
			console.log(`Setting status to: ${args.join(' ')}`);
		} else if (args.join(' ') == "dnd") {
			//message.client.user.setStatus('dnd');
			console.log(`Setting status to: ${args.join(' ')}`);
			message.client.user.setPresence({
				status: 'dnd'
			});
		} else if (args.join(' ') == "idle") {
			//message.client.user.setStatus('idle');
			console.log(`Setting status to: ${args.join(' ')}`);
			message.client.user.setPresence({
				status: 'idle'
			});
		} else if (args.join(' ') == "invisible") {
			//message.client.user.setStatus('invisible');
			console.log(`Setting status to: ${args.join(' ')}`);
			message.client.user.setPresence({
				status: 'invisible'
			});
		} else {
			console.log("error")
		}
	},
};