// FalseRecord - 24/10/2020

// constances 
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')
const prefix = 'r!';
const fs = require('fs');
 
// getting Discord Collection and putting it into the commands
client.commands = new Discord.Collection();
 
// getting the file names and adding the end .js
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
// When the bot starts up
client.once('ready', () => {
    console.log('FalseBot is online!');
    client.user.setActivity("Prefix: r! | Developer: FalseRecord", {type: 'PLAYING'})
});
 
// Message Checks
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args); 
    }
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'kick'){
        client.commands.get('kick').execute(message, args); 
    }
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ban'){
        client.commands.get('ban').execute(message, args); 
    }
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'help'){
        client.commands.get('help').execute(message, args); 
    }
});


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'purge'){
        client.commands.get('purge').execute(message, args); 
    }
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'randomnumber'){
        client.commands.get('numbergame').execute(message, args); 
    }
});



client.login(process.env.token);
