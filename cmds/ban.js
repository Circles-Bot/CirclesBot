const discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    message.reply("This command has not yet been set up, please check back later!");
};

// Name is the command name, .mute will initialize the command
module.exports.help = {
    name: "ban"
}
