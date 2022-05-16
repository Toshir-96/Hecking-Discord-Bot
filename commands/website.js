module.exports = {
    name: 'website',
    description: "this is a website command!",
    execute(message, args) {
        message.channel.send('https://hecking.me')
    }
}