module.exports = {
    name: 'invite',
    description: "this is a invite command!",
    execute(message, args) {
        message.channel.send("https://discord.com/oauth2/authorize?client_id=972505806933221417&scope=bot&permissions=165289651327")
    }
}