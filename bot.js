const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    var ID = message.author.id;
    switch(message.content.toLowerCase()){
        case '!hello':
            if(ID === '142027014029705217'){
                message.channel.send('Hello Mistress');
            }
            else{
                message.channel.send('Hello Master');
            }
            break;
        case '!dildo':
            message.channel.send('SHROOMS!');
            break;
    }       
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
