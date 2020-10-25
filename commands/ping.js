const discord = require("discord.js");

module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args){
        message.channel.send('Getting ping').then(msg => {
            const ping = msg.createdTimestamp - message.createdTimestamp;

            let embed = new discord.MessageEmbed()
            .setTitle("Action: Ping")
            .setDescription(`FalseBot's ping is: ${ping}ms`)
            .setColor("#ff2050")
            .setFooter(`Pinged by ${message.author.username}`);

            msg.edit(`RecordBot's ping: `, embed)
        })
    }
}