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

     if (!message.member.hasPermission("BAN_MEMBERS")){

      let embed = new discord.MessageEmbed()
      .setTitle("Action:  Ban (fail)")
      .setDescription(`USER MISSING_PERMISSION: BAN_MEMBERS!`)
      .setColor("#4f7d96")
      .setFooter(`nil`);
      
     }

     if (!message.guild.me.hasPermission("BAN_MEMBERS")){

      let embed = new discord.MessageEmbed()
      .setTitle("Action: Ban (fail)")
      .setDescription(`BOT MISSING_PERMISSION: BAN_MEMBERS!`)
      .setColor("#4f7d96")
      .setFooter(`nil`);

     }

     if(!toBan){

      let embed = new discord.MessageEmbed()
      .setTitle("Action: Ban (fail)")
      .setDescription(`Failed to mention username in argument!`)
      .setColor("#4f7d96")
      .setFooter(`nil`);

     }

     const reason = args[3]

     if (!reason){

      let embed = new discord.MessageEmbed()
      .setTitle("Action: Ban (fail)")
      .setDescription(`Must have reason to ban user.`)
      .setColor("#4f7d96")
      .setFooter(`nil`);

     }

      
    let embed = new discord.MessageEmbed()
      .setTitle("Action: Ban")
      .setDescription(`Banned ${toBan} for ${reason}`)
      .setColor("#ff2050")
      .setFooter(`Banned by ${message.author.username}`);
  
    message.channel.send(embed)
      
    }
 }