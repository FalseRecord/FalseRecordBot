// FalseRecord - 24/10/2020

// constances 
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '/';
const fs = require('fs');
 
// const settings = new enmap({
//     name: "settings",
//     autoFetch: true,
//     cloneLevel: "deep",
//     fetchAll: true

// })
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
    console.log('Southglow is online!');
    client.user.setActivity("Prefix: / | Made by: False;#9999", {type: 'PLAYING'})
});
 
// User Commands
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
        return message.channel.send("This command is currently unavaible, please wait untill updated!")
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


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'mute'){
        client.commands.get('mute').execute(message, args); 
    }
});


client.on('message', async =>{
//     if(!message.content.startsWith(prefix) || message.author.bot) return;
 
//     const args = message.content.slice(prefix.length).split(/ +/);
//     const command = args.shift().toLowerCase();
 
//     if(command === 'ticket-setup'){
//         let channel = message.mentions.channels.first();

//         if(!channel) return message.reply("Missing Argument: channel.")

//         let sent = aync(await channel.send(new discord.MessageEmbed())
//             .setTitle("Ticket System")
//             .setDescription("React to open a ticket!")
//             .setColor("ff2050")
//             .setFooter("Ticket System")

//         );
//     settings.set(`${message.guild.id}-ticket`, sent.id);
//     sent.react("🎫")
//     message.channel.send("Ticket System Setup Done!")     }
 });

// client.on('messageReactionAdd', async (reaction, user) =>{
//     if(user.partial) await user.fetch();
//     if(reaction.partial) await reaction.fetch();
//     if(reaction.message.partial) await reaction.message.fetch();

//     if(user.bot) return;

//     let ticketid = await settings.get(`${reaction.message.guild.id}-ticket`)
//     if(!ticketid) return;

//     //if(reaction.message.id)


//})


// MyCommands

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'shutdown'){
        client.commands.get('shutdown').execute(message, args); 
    }
});




client.login(process.env.token);
