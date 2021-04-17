const Discord = require('discord.js');
module.exports = {
	name: 'role',
	description: 'Gives role!',
    args: true,
    adminRole: true,
	usage: '<user> <role>',
	execute(message, args) {
        //message.channel.send(`${args}\n${args[0]}\n${args[1]}`);
        if (!message.mentions.users.size) {
            return message.reply('Needs to @ a user');
        }
        if (!args[1]) {
            return message.reply('Need to specify role')
        }
        try {
            const member = message.mentions.members.first();
            let roleID = `${args[1]}`
            let testRole = message.guild.roles.cache.find(role => role.name == roleID );
            console.log(`Giving ${member} the role ${roleID}`)
            member.roles.add(testRole)
        } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!\n was it an active role?');
        }
	},
};