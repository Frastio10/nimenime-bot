const fs = require('fs');
const dotenv = require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client();

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir('./events/', (err, files) => {
	const eventHandler = require('./handlers/EventHandler');
	eventHandler(err, files, client);
});
fs.readdir('./commands/', (err, files) => {
	const commandHandler = require('./handlers/CommandHandler');
	commandHandler(err, files, client);
});

client.login(process.env.TOKEN);