const { Client, CategoryChannel, MessageEmbed} = require('discord.js')
module.exports = {
    name: "ping",
    category: "info",
    description: "Check ping của bot",
    run: async (client, message, args) => {
       message.channel.send(`Pong - ${client.ws.ping}ms`)
    }
}