// Required
const botSettings = require("./botsettings.json");
const discord = require("discord.js");
const prefix = botSettings.prefix;
const bot = new discord.Client({disableEveryone: true});

// Variables

// Bot Ready
bot.on("ready", async () => {
	console.log(`Bot is ready! ${bot.user.username}`);
});

// Bot Login
bot.login(botSettings.token);
