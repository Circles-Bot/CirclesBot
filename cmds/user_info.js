const discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    let embed = new discord.RichEmbed()
        .setAuthor(message.author.username)
        .setDescription("This is the user's info!")
        .setColor("#4292f4")
        .addField("Full Username", `${message.author.username}#${message.author.discriminator}`)
        .addField("ID", message.author.id)
        .addField("Created At", message.author.createdAt);

    message.channel.send({embed: embed});
};

// Name is the command name, .userinfo will initialize the command
module.exports.help = {
    name: "userinfo"
}
