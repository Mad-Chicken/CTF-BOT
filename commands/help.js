module.exports = {
	name: 'help',
	description: 'help!',
	guildOnly: true,
	aliases: ['commands', 'whatis'],
	usage: '[command name]',
	devRole: true,
	execute(message, args) {
		message.delete();
		message.channel.send({embed: {
			color: 'RANDOM',
			/*
			author: {
			  name: message.author.username,
			  icon_url: message.author.avatarURL
			},
			*/
			title: "Help commands",
		//	url: "http://google.com",
			description: "Illuminati suffix == $",
			fields: [{
				name: "8ball",
				value: "Get the help of the mystical bot to answer your questions.\n*Syntax* **8ball** ***<question>***"
			  },
			  {
				name: "avatar",
				value: "Get the avatar link for a user.\n*Syntax* **avatar** ***<@user>***"
			  },
			  {
				name: "bored",
				value: "What you wana do?\n[Link 2 API](https://www.boredapi.com/contributing)\n*Syntax* **bored**\n\tYou have to do what it says, or else..."
			  },
			  {
				name: "meme",
				value: "Get a free meme\n[Link 2 API](https://github.com/D3vd/Meme_Api)\n*Syntax* **meme** __*subreddit*__"
			  },
			  {
				name: "quote",
				value: "Get a quote...\n[Link 2 API](https://www.tronalddump.io/)\n*Syntax* **quote**"
			  },
			  {
				name: "server",
				value: "Get some server info.\n*Syntax* **server**"
			  },
			{
				name: "insult",
				value: "Get a nice insult\n*Syntax* **insult**"
			}
			],
			timestamp: new Date()/*,
			footer: {
			  icon_url: message.author.avatarURL,
			  text: "© Example"
			}
			*/
		  }
		});
	},
};
