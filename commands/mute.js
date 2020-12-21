const discord = require('discord.js')
//const ms = require('ms')


module.exports = {
    name: "mute",
    category: "moderation",
    description: "mutes player for length of time",
    usage: "nil",
    execute: (message, args) => {
        let target = message.guild.member(message.mentions.user.first() || message.guild.members.get(args[1]))
        let time = message.args[2]

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
            message.channel.send("You need to enter a valid time.")
        }
    }
}