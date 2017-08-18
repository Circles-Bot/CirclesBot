// Required
const Discord = require("discord.js");

const Token = "MzQ4MjE1NzEwMzQ4MjE0Mjc0.DHj1JA.2-7VYWyIDCXA7fM4rRaLEBKo8PI";
const Prefix = ".";

var bot = new Discord.Client();

// Bot Ready
bot.on("ready", function() {
	console.log("Logic Bot is ready!");
});

// Bot Login
bot.login(Token);
