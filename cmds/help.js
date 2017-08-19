const discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    let embed = new discord.RichEmbed()
        .setTitle("Circles Bot Commands")
        .setThumbnail("http://i.imgur.com/huzkdSi.png")
        .setColor("#4292f4")
        .addField(":information_source: Information", ".help - Sends the user a list of commands \n.info - Lists information ont he bot \n.userinfo - Lists the info of the user who initiated the command \n.ping - Checks the bots response time")
        .addField(":cop: Administration", ".kick [@user] - Kicks a user from the server \n.ban [@user] - Bans a user from the server \n.mute [@user] [time in seconds] - Mutes a user, disabling the ability to send messages \n.unmute [@user] - Manually unmutes a user")
        .addField(":basketball: Fun", ".mball [Question] - Answers a question with Yes, No, or Maybe \n.hi - Replies with Hello! \n.rps [choice] - Play Rock, Paper, Scissors with the bot \n.meme - Posts a random meme to the channel")
        .addField(":musical_note: Music", ".play [song link] - Starts playing the song given \n.skip - Skips the current playing song \n.stop - Stop the bot from playing music")

    message.channel.send("Help sent, You can also take a look at circlesdiscord.enjin.com")
    message.member.send({embed: embed});
};

// Name is the command name, .help will initialize the command
module.exports.help = {
    name: "help"
}
