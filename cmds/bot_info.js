const discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    let embed = new discord.RichEmbed()
        .setTitle("About Circles Bot")
        .setThumbnail("http://i.imgur.com/8UuwIEb.png")
        .setDescription("Circles Bot is a multipurpose Discord Bot built for your enjoyment and ease.")
        .addField("Created By", "ProjectChaos#6395 & Null#3081")
        .addField("Information", "[Official Website](https://circlesbot.mistforums.com) \n[Official Server](https://discord.gg/aDAdUgG) \n[Invite Circles](https://discordapp.com/oauth2/authorize?client_id=348215710348214274&scope=bot&permissions=535850047) \n[Donate](https://www.patreon.com/circlesbot)")
        .setColor("#4292f4")

    message.channel.send({embed: embed});
};

// Name is the command name, .botinfo will initialize the command
module.exports.help = {
    name: "botinfo"
}
