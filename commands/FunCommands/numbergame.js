const discord = require('discord.js')
const client = new discord.Client()


module.exports = {
    name: "randomnumber",
    category: "fun",
    description: "Guess the random number!",
    usage: "moderation",
    execute: (message) => {
        
        const number = math.random(0, 10000)
        message.channel.send("I am thinking of a number, 1 to 10000. Guess it.")
        console.log(number)
    }
}