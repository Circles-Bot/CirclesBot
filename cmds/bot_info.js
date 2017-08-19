const discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    let embed = new discord.RichEmbed()
        .setTitle("About Circles Bot")
        .setThumbnail("http://i.imgur.com/T4yPGZA.png")
        .setDescription("Circles Bot is a multipurpose Discord Bot built for your enjoyment and ease.")
        .setColor("#4292f4")
        .addBlankField()
        .addField("Official Website", "circlesdiscord.enjin.com")

    message.channel.send({embed: embed});
};

// Name is the command name, .botinfo will initialize the command
module.exports.help = {
    name: "botinfo"
}
