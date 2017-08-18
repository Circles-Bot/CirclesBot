// Required
const botSettings = require("./botsettings.json");
const discord = require("discord.js");
const prefix = botSettings.prefix;

const bot = new Discord.Client({disableEveryone: true});

// Bot Ready
bot.on("ready", async () => {
	console.log(`Bot is ready! ${bot.user.username}`);
});

// Bot Login
bot.login(botSettings.token);
