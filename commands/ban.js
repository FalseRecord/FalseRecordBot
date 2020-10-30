const discord = require("discord.js");


module.exports = {
  name: "ban",
  category: "moderation",
  description: "Bans anyone with one shot xD",
  usage: "ban <@user> <reason>",
  execute: (message) => {
     let messageArray = message.content.split(" ")
     let args = messageArray.slice(1);

     
     let toBan = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);

     if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You need permissions!") 
     if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Bot need permissions!") 

     const reason = args[1] || "There was no reason!";

     toBan.ban({
      reason: reason
     })
      
     let embed = new discord.MessageEmbed()
       .setTitle("Action: Ban")
       .setDescription(`Banned ${toBan} for ${reason}`)
       .setColor("#ff2050")
       .setFooter(`Banned by ${message.author.username}`);
  
      message.channel.send(embed)
      
    }
 }