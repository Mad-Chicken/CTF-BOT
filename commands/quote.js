module.exports = {
    name: 'quote',
    aliases: ['trump', 'quote'],
    description: 'Trump quote',
    execute(message, args) {
        //https://www.tronalddump.io/
        const https = require('https');
        const options = {
            hostname: 'api.tronalddump.io',
            path: '/random/quote',
             headers: {
                'Accept': 'application/hal+json'
            }
        }
        https.get(options, (response) => {
            var result = ''
            response.on('data', function (chunk) {
                result += chunk;
            });
            response.on('end', function () {
                message.channel.send(JSON.parse(result)['value']);
            });
        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });
    },
};
