const discord = require("discord.js");

// Variables
var rrppss = [
	"I chose Rock",
	"I chose Paper",
	"I chose Scissors",
];

module.exports.run = (bot, message, args) => {
    if (args[0]) message.reply(rrppss[Math.floor(Math.random() * rrppss.length)]);
    else message.reply("Can't read that. Please use `.rps [Rock, Paper, Scissors]`");
};

// Name is the command name, .rps will initialize the command
module.exports.help = {
    name: "rps"
}
