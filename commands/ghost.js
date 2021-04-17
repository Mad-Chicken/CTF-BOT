const Discord = require('discord.js');
module.exports = {
		name: 'ghost',
		aliases: ['gp', 'ghost_ping'],
        devRole: 'true',
        guildOnly: true,
        description: 'Ghost ping to users, deletes after message sent',
        execute(message, args) {
			message.delete();
        }
};
