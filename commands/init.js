module.exports = {
    name: 'role_start',
	aliases: ['roles', 'borked'],
	usage: '<>',
	description: 'Print role speal',
	guildOnly: true,
	devRole: true,
    execute(message) {
		message.delete();
		message.channel.send(`
		𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐭𝐨 𝐭𝐡𝐞 𝐇𝐚𝐧𝐠𝐨𝐮𝐭 𝐒𝐞𝐫𝐯𝐞𝐫

		Read info about commands & the server at #📋info 
		
		-Roles
			BigBrainGang: :brain:
			DJ:  :musical_note:
			∰:  :non_potable_water:
		
		ᴵᶠ ʳᵒˡᵉˢ ᵃʳᵉ ⁿᵒᵗ ʷᵒʳᵏⁱⁿᵍ ᵈᵐ @Mad-Chicken
		`).then(sentEmbed => {
		    sentEmbed.react("🧠")
		    sentEmbed.react("🎵")
			sentEmbed.react('🚱')
		});
    },
};
