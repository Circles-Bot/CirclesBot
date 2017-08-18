// Required
const discord = require("discord.js");
const token = "MzQ4MjE1NzEwMzQ4MjE0Mjc0.DHj1JA.2-7VYWyIDCXA7fM4rRaLEBKo8PI";
const prefix = ".";

var bot = new Discord.Client();

// Bot Ready
bot.on("ready", function() {
	console.log("Circles Bot is ready!");
});

// Bot Login
bot.login(token);
