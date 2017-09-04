const discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    let embed = new discord.RichEmbed()
        .setAuthor("Invite Our Music Bot", "https://i.imgur.com/8UuwIEb.png")
        .setDescription("[Invite Link](https://circlesbot.mistforums.com)")
        .setColor("#4292f4")

    message.channel.send({embed: embed});
};

// Name is the command name, .music will initialize the command
module.exports.help = {
    name: "music"
}
