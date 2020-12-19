const discord = require("discord.js");

module.exports = {
  name: "kick",
  category: "moderation",
  description: "Kick anyone with one shot xD",
  usage: "kick <@user> <raeson>",
  execute: (message, args) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) {
      let embed = new discord.MessageEmbed()
      .setTitle("Action: Kick (fail)")
      .setDescription(`USER MISSING_PERMISSION: KICK_MEMBERS!`)
      .setColor("#4f7d96")
      .setFooter(`nil`);
      
      return message.channel.send(embed)
    }
    
    if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
      let embed = new discord.MessageEmbed()
      .setTitle("Action: Kick (fail)")
      .setDescription(`BOT MISSING_PERMISSION: KICK_MEMBERS!`)
      .setColor("#4f7d96")
      .setFooter(`nil`);
      
      return message.channel.send(embed)
    }

    let target = message.mentions.members.first();
    
    if(!target) {
      let embed = new discord.MessageEmbed()
      .setTitle("Action: Kick (fail)")
      .setDescription(`Failed to mention username in argument!`)
      .setColor("#4f7d96")
      .setFooter(`nil`);
      
      return message.channel.send(embed)
    }

    if(target.id === message.author.id) {
      let embed = new discord.MessageEmbed()
      .setTitle("Action: Kick (fail)")
      .setDescription(`You can't kick yourself!`)
      .setColor("#4f7d96")
      .setFooter(`nil`);
      
      return message.channel.send(embed)
    }

    
    let embed = new discord.MessageEmbed()
    .setTitle("Action: Kick")
    .setDescription(`Kicked ${target} (${target.id})`)
    .setColor("#4f7d96")
    .setFooter(`Kicked by ${message.author.username}`);
    
    message.channel.send(embed)
    
    target.kick(args[1]);
    }
 }