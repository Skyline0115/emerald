const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.substring(0, 1) == '!') {
        if (message.content === '!ping') {
    	    message.channel.send('PONG!');
  	    }
        else {
            message.channel.send('shrooms');
        }
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
