const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

//When ready
client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}`);
	client.user.setActivity("my code", { type: "STREAMING", url: "https://www.twitch.tv/shroud" })
	client.user.setStatus("online");
});

//Join
client.on("guildMemberAdd", (member) => {
	console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );
	member.guild.channels.cache.find(c => c.name === "general").send(`"${member.user.username}" has joined this server`);
	member.send(`Welcome the the server ${member}!`);
});

//Member Leave
client.on("guildMemberRemove", member => {
	member.guild.systemChannel.send(`${member} left the server 😢`).then(sentEmbed => {
		sentEmbed.react("😢");
		console.log(`${member} left`)
	});
});

//Open all commands in ./commands dir
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

//Message Check
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	
	if (!command) return;

//DM Check
	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

//ARGS Check
	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

//Check Role Admin
	if(command.adminRole) {
		if (!(message.member.roles.cache.find(r => r.name === "Admin"))) {
			return message.channel.send(`${message.author} you need the Admin role`);
		}
	}

//Check Role Dev
	if(command.devRole) {
		if (!(message.member.roles.cache.find(r => r.name === "Dev"))) {
			return message.channel.send(`${message.author} you need the Dev role`);
		}
	}

//Member
	if(command.ctf_user) {
		if (!(message.member.roles.cache.find(r => r.name === "ctf_user"))) {
			return message.channel.send(`${message.author} you need to be a ctf user.`);
		}
	}

//Execute Command
	try {
        if (commandName === 'playing') {
            console.log(`Status set to  Play: ${args.join(' ')}`)
            return client.user.setActivity(`${args.join(' ')}`);
        } else if (commandName === 'watching') {
            console.log(`Status set to watching: ${args.join(' ')}`)
            return client.user.setActivity(`${args.join(' ')}`, { type: 'WATCHING' });
        } else if (commandName === 'listening') {
            console.log(`Status set to listening: ${args.join(' ')}`);
            return client.user.setActivity(`${args.join(' ')}`, { type: 'LISTENING' });
        }
        command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

/*
// On reaction
client.on('messageReactionAdd', async (reaction, user) => {
	if (reaction.message.partial); await reaction.message.fetch();
	if (reaction.partial) await reaction.fetch();

	if (user.bot) return;
	if (!reaction.message.guild) return;

	if ((reaction.message.channel.id === "801615591533707275") && (reaction.emoji.name === '🧠')) { //BigBrainGang
		try {
			reaction.message.guild.members.cache.get(user.id).roles.add('801546595460055087').catch()
		} catch (error) {
			console.log(error);
		}
	} else if ((reaction.message.channel.id === "801615591533707275") && (reaction.emoji.name === '🚱')) { //Not sure
		try {
			reaction.message.guild.members.cache.get(user.id).roles.add('832998854957465620').catch()
		} catch (error) {
			console.log(error);
		}
	}
});

//Off reaction
client.on("messageReactionRemove", async (reaction, user) => {
	if (reaction.message.partial); await reaction.message.fetch();
	if (reaction.partial) await reaction.fetch();

	if (user.bot) return;
	if (!reaction.message.guild) return;

	if ((reaction.message.channel.id === "801615591533707275") && (reaction.emoji.name === '🧠')) {
		try {
			await reaction.message.guild.members.cache.get(user.id).roles.remove('801546595460055087')
		} catch (error) {
			console.log(error);
		}
	} else if ((reaction.message.channel.id === "801615591533707275") && (reaction.emoji.name === '🚱')) {
		try {
			await reaction.message.guild.members.cache.get(user.id).roles.remove('832998854957465620')
		} catch (error) {
			console.log(error);
		}
	}
});
*/

/*
// debug
client.on("debug", function(info){
    console.log(`debug -> ${info}`);
});
*/

// warning
client.on("warn", function(info){
    console.log(`warn: ${info}`);
});

client.login(token);