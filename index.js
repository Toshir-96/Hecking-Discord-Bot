var port = process.evn.PORT || 5000;

const { Client, Intents } = require('discord.js');

const Discord = require('discord.js');

const keepAlive = require("./server")

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = 'heck!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('Heck!help | heck.gg');
})




client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if (command === 'info') {
        client.commands.get('info').execute(message, args);
    } else if (command === 'website') {
        client.commands.get('website').execute(message, args);;
    } else if (command === 'help') {
        client.commands.get('help').execute(message, args);
    } else if (command === 'youtube') {
        client.commands.get('youtube').execute(message, args);
    } else if (command === 'invite') {
        client.commands.get('invite').execute(message, args);
    } else if (command === 'server') {
        client.commands.get('server_invite').execute(message, args);
    }
});

keepAlive()
client.login('OTcyNTA1ODA2OTMzMjIxNDE3.GWBq_u.ePEi2JmnUEFfMHEdAwTPcRTjFSvpx_jWujpEO4')