module.exports = {
    name: 'youtube',
    description: "this is a youtube command!",
    execute(message, args) {
        message.channel.send('https://www.youtube.com/channel/UCeGwPhZxmXAC2ULfIOHA0Gw')
    }
}