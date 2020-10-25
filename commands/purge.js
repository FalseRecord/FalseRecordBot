const discord = require('discord.js')


module.exports = {
    name: "purge",
    category: "moderation",
    description: "clears a certain amount of messages",
    usage: "moderation",
    execute: (message, args) => {

      let embed = new discord.MessageEmbed()
      .setTitle("Action: Purge")
      .setDescription(`${message.author.username} has purged this channel!`)
      .setColor("#116790")
      .setFooter(`FalseBot2020`);
      
      if(args[0] === "") return message.channel.send(`**Please provide a valid amount!**`)

      if(args[0] > 10000) return message.channel.send(`**Please provide a ammount under 10000!**`)

      if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You need permissions!") 
      if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Bot need permissions!") 

      message.channel.bulkDelete(args[0]).then(message.channel.send(embed))
    }
}