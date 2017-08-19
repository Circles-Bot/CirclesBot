// Variables
var fortunes = [
	"Yes",
	"No",
	"Maybe",
];

module.exports.run = (bot, message, args) => {
    if (args[1]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
    else message.reply("Can't read that. Please use `!mball [Ask a question]`");
};

// Name is the command name, .mball will initialize the command
module.exports.help = {
    name: "mball"
}
