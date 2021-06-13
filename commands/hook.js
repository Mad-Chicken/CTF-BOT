const Discord = require('discord.js');
module.exports = {
        name: 'hook',
        description: 'Gaming message',
        guildOnly: true,
        devRole: true,
        execute(message, args) {
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('Sup')
				.setURL("http://algaea.xyz/")
                .setDescription('I see you, bored, broke, and want to grow their brain...')
                .setThumbnail('https://4.bp.blogspot.com/-SHZrVFh5Y7A/UgZ1P9LOXWI/AAAAAAAACgA/x9po75i3BsY/s1600/MoneyHungry.jpg?size=256')
                .setTimestamp()
            message.channel.send(exampleEmbed)
        },
};
