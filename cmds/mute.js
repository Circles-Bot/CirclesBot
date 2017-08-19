module.exports.run = (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have permissions to mute members.");
    let toMute = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!toMute) return message.channel.send("You did not specify a user to mute!");
    if(toMute.id === message.author.id) return message.channel.send("You cannot mute yourself");
    if(toMute.highestRole.position >= message.member.highestRole.postition) return message.channel.send("You cannot mute this member");
    let role = message.guild.roles.find(r => r.name === "Muted");
    if(!role) {
        try {
            role = await message.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions: []
            });

            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(role, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch(e) {
            console.log(e.stack);
        }
    }

    if(toMute.roles.has(role.id)) return message.channel.send("This user is already muted!");
    await toMute.addRole(role);
    message.channel.send("I have muted this user.");
};

// Name is the command name, .mute will initialize the command
module.exports.help = {
    name: "mute"
}
