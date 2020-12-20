const discord = require('discord.js')


module.exports = {
    name: "mute",
    category: "moderation",
    description: "mutes player for length of time",
    usage: "nil",
    execute: (message, args) => {
        let target = message.mentions.members.first();

        if(!message.member.hasPermission("MANAGE_ROLES")) {
            let embed = new discord.MessageEmbed()
            .setTitle("Action: Mute (fail)")
            .setDescription(`USER MISSING_PERMISSION: MANAGE_ROLES`)
            .setColor("#4f7d96")
            .setFooter(`nil`);

        }
        
        if(!target){
            let embed = new discord.MessageEmbed()
            .setTitle("Action: Mute (fail)")
            .setDescription(`Failed to mention username in argument!`)
            .setColor("#4f7d96")
            .setFooter(`nil`);
        }


    }
}