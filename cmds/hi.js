module.exports.run = (bot, message, args) => {
    message.reply("Hello!");
};

// Name is the command name, .hi will initialize the command
module.exports.help = {
    name: "hi"
}
