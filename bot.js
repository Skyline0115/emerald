const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    
    switch(message.content.toLowerCase()){
        case '!hello':
            message.channel.send(client.role);
            break;
        case '!dildo':
            message.channel.send('SHROOMS!');
            break;
    }       
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
