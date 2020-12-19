const discord = require("discord.js");

module.exports = {
  name: "shutdown",
  category: "owner",
  description: "Shuts down bot if really needed",
  usage: "!shutdown",
  execute: (message, args) => {
    if(!message.author.id == "700102460286697523", "380994102742745098"){

        let embed = new discord.MessageEmbed()
        .setTitle("Action: Shutdown (fail)")
        .setDescription(`User not allowed!`)
        .setColor("#4f7d96")
        .setFooter(`nil`);
        
        return message.channel.send(embed)
    }

    
    let embed = new discord.MessageEmbed()
    .setTitle("Action: Shutdown")
    .setDescription(`Bot shutting down.`)
    .setColor("#4f7d96")
    .setFooter(`nil`);
    
    return message.channel.send(embed)
    try {
        process.exit()

    }
  }
}
