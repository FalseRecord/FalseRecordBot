const discord = require('discord.js')
//const ms = require('ms')


module.exports = {
    name: "mute",
    category: "moderation",
    description: "mutes player for length of time",
    usage: "nil",
    execute: (message) => {

        let messageArray = message.content.split(" ")
        let args = messageArray.slice(1);
   
        
        let target = message.mentions.members.first();
        const time = args[2]
   
        if(!message.member.hasPermission("MANAGE_ROLES")) {
            let embed = new discord.MessageEmbed()
            .setTitle("Action: Mute (fail)")
            .setDescription(`USER MISSING_PERMISSION: MANAGE_ROLES`)
            .setColor("#4f7d96")
            .setFooter(`nil`);
            message.channel.send(embed) 

        }
        
        if(!target){
            let embed = new discord.MessageEmbed()
            .setTitle("Action: Mute (fail)")
            .setDescription(`Failed to mention username in argument!`)
            .setColor("#4f7d96")
            .setFooter(`nil`);
            message.channel.send(embed) 
        }

        if(!time) {
            let embed = new discord.MessageEmbed()
            .setTitle("Action: Mute (fail)")
            .setDescription(`Failed to mention a time in argument!`)
            .setColor("#4f7d96")
            .setFooter(`nil`);
            message.channel.send(embed) 
        }
    }
}