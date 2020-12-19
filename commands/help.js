const discord = require('discord.js')


module.exports = {
    name: "help",
    category: "help",
    description: "Help with commands",
    usage: "help",
    execute: (message) => {
        let embed = new discord.MessageEmbed()
        .setTitle("Help Prompt")
        .setDescription(`\n\n**MODERATION**\n/kick <@user>: kicks player from the server\n/ban <@user>: Bans user from your discord server\n\n**FUN**\n/ping: Gets the discord bots ping!`)
        .setColor("#109EE0")
        .setFooter(`Promped by ${message.author.username}`);

        message.channel.send(embed)
    }
}