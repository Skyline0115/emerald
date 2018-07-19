const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    switch(message.content){
        case '!ping':
            message.channel.send('PONG!');
            break;
        case '!dildo':
            message.channel.send('SHROOMS!');
            break;
    }       
        /*if (message.content === '!ping') {
    	    message.channel.send('PONG!');
  	    }
        else {
           
        }*/
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
