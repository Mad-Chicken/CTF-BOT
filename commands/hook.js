const Discord = require('discord.js');
module.exports = {
        name: 'message',
        description: 'Gaming message',
        execute(message, args) {
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('Join Us!')
                .setDescription('ya you')
                .setThumbnail('https://cdn.discordapp.com/icons/443885514207264779/846fae7d8bd3ae3dd75cb4f0f77bd550.png?size=256')
                .setTimestamp()
            message.channel.send(exampleEmbed)
        },
};