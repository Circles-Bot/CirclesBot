// Required
const botSettings = require("./botsettings.json");
const discord = require("discord.js");
const fs = require("fs");
const prefix = botSettings.prefix;
const bot = new discord.Client({disableEveryone: true});
bot.commands = new discord.Collection();

// Command Manager
fs.readdir("./cmds/", (err, files) => {
	if(err) console.error(err);
	let jsfiles = files.filter(f => f.split(".").pop() === "js");
	if(jsfiles.length <= 0) {
		console.log("No commands to load!");
		return;
	}
	console.log(`Loading ${jsfiles.length} commands!`);
	jsfiles.forEach((f, i) => {
		let props = require(`./cmds/${f}`);
		console.log(`${i + 1}: ${f} loaded!`);
		bot.commands.set(props.help.name, props);
	});
});

// Bot Ready
bot.on("ready", () => {
	console.log(`Bot is ready! ${bot.user.username}`);
});

bot.on("message", message => {
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;
	let messageArray = message.content.split(/\s+/g);
	let command = messageArray[0];
	let args = messageArray.slice(1);
	if(!command.startsWith(prefix)) return;
	let cmd = bot.commands.get(command.slice(prefix.length));
	if(cmd) cmd.run(bot, message, args);
});

// Bot Login
bot.login(botSettings.token);
