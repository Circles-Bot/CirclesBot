// Required
const botSettings = require("./botsettings.json");
const discord = require("discord.js");
const prefix = botSettings.prefix;

// Variables
var bot = new discord.Client({disableEveryone: true});

// Bot Ready
bot.on("ready", function() {
	console.log(`Bot is ready! ${bot.user.username}`);
});

// Bot Login
bot.login(botSettings.token);
