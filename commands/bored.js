module.exports = {
    name: 'bored',
    aliases: ['bored', 'killme'],
    description: 'Bored thing to do',
    execute(message, args) {
        message.delete();
        const https = require('https');
        const options = {
	//https://www.boredapi.com/contributing
            hostname: 'www.boredapi.com',
            path: '/api/activity'
        }
        https.get(options, (response) => {
            var result = ''
	    var returnValue = 'null';
            response.on('data', function (chunk) {
                result += chunk;
            });
            response.on('end', function () {
		returnValue = String(JSON.parse(result)['activity']);
		console.log(returnValue);
		message.channel.send(returnValue);
            });
        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });
    },
};
