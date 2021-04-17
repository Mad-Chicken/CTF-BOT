module.exports = {
    name: 'insult',
    aliases: ['got_em', 'burn'],
    description: 'Get an insult',
    execute(message) {
		// https://evilinsult.com/
		message.delete();
		const https = require('https');
		const options = {
			hostname: 'evilinsult.com',
			path: `/generate_insult.php`
		}
		https.get(options, (response) => {
			var result = ''
			response.on('data', function (chunk) {
				result += chunk;
			});
			response.on('end', function () {
				console.log(result);
				message.channel.send(result);
			});
		}).on("error", (err) => {
			console.log("Error: " + err.message);
		});
    },
};
