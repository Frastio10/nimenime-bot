module.exports = {
	name: "help",
	description: "Just a help command",
	aliases: [""],
	usage: "[command args]",
	guildOnly: false,
	args: false,
	permissions: {},
	execute: (message, args, client) => {
		message.reply("this is the help command");
	},
};
