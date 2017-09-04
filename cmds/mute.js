const discord = require("discord.js");

//This command is a penis, here's the code
module.exports.run = (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have the `manage messages' permission.");

  let toMute = message.mentions.users.first();
  if (!toMute) return message.reply("You have not specified someone to mute.");
  return message.reply(toMute.username + " has been muted.");
  toMute.addRole("Muted")

  let role = message.guild.roles.find(r => r.name == "Muted");
  if(!role) {
    try {
      role = message.guild.createRole({
        name: "Muted",
        color: "#000000",
        permission: []
      });

      message.guild.channels.forEach((channel, id) => {
       channel.overwritePermissions(role, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    } finally {toMute.addRole(role)
      };
};
  return;
};

// Name is the command name, .mute will initialize the command
module.exports.help = {
    name: "mute"
}
