const discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    message.reply("Hello!");
};

// Name is the command name, .mute will initialize the command
module.exports.help = {
    name: "mute"
}
