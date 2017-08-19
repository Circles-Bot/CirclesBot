module.exports.run = (bot, message, args) => {
    message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");
};

// Name is the command name, .ping will initialize the command
module.exports.help = {
    name: "ping"
}
