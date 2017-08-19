const discord = require("discord.js");

// Variables
var randomMemes = [
	"Memes/meme1.jpg",
	"Memes/meme2.jpg",
	"Memes/meme3.jpg",
	"Memes/meme4.jpg",
	"Memes/meme5.jpg",
	"Memes/meme6.png",
	"Memes/meme7.jpg",
	"Memes/meme8.jpg",
	"Memes/meme9.jpg",
	"Memes/meme10.jpg",
	"Memes/meme11.jpg",
	"Memes/meme12.jpg",
	"Memes/meme13.jpg",
];

module.exports.run = (bot, message, args) => {
    message.channel.sendFile(randomMemes[Math.floor(Math.random() * randomMemes.length)]);
};

// Name is the command name, .meme will initialize the command
module.exports.help = {
    name: "meme"
}
