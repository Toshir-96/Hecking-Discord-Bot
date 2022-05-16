module.exports = {
    name: 'help',
    description: "this is a help command!",
    execute(message, args) {
        message.channel.send('sorry!, bot is currently under maintanance')
    }
}