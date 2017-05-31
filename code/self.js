"use strict";
const Discord = require('discord.js');
const settings = require('./settings.json');
const ddiff = require('return-deep-diff');
const client = new Discord.Client({fetchAllMembers: true})
const wonder = "138431969418543104";
const moment = require("moment");
require("moment-duration-format");
//client.on('',''{});
client.on('ready',() => {
	console.log('I\'m Online');
});

var prefix = "self."
client.on('message', message => {
	var guild = message.guild;
	if (!message.content.startsWith(prefix)) return;
	let args = message.content.split(' ').slice(1);
	var argresult = args.join(' ');
	if (message.author.bot) return;


if(message.content.startsWith(prefix + 'members')) {
	  if(message.author.id !== "YOUR_CLIENT_ID") return;
	message.channel.sendMessage(message.guild.memberCount);
};

if (message.content.startsWith(prefix + 'info')) {
  if(message.author.id !== "YOUR_CLIENT_ID") return;
        message.channel.sendMessage(`${message.author.username}:
**Username:** ${message.author.username}#${message.author.discriminator}
**ID:** ${message.author.id}
**Avatar URL:** ${message.author.avatarURL}`);
    };

if (message.content.startsWith(prefix + 'avatar')) {
   if(message.author.id !== "YOUR_CLIENT_ID") return;
      message.reply(message.author.avatarURL);
  };

	if (message.content.startsWith(prefix + 'ping')) {
		  if(message.author.id !== "YOUR_CLIENT_ID") return;
		message.channel.sendMessage("", {embed: {
			color: 3447003,
			title: `Pong! \`${Date.now() - message.createdTimestamp} ms\``,
			timestamp: new Date(),
			footer: {
				icon_url: client.user.avatarURL,
				
			}
		}});
	}

if(message.content.startsWith(prefix + 'roles')) {
	  if(message.author.id !== "YOUR_CLIENT_ID") return;
	message.reply(message.guild.roles.map(r => r.name.replace('@everyone', 'Here :arrow_down:')));
};

if(message.content.startsWith(prefix + 'stats')) {
	  if(message.author.id !== "YOUR_CLIENT_ID") return;
	message.channel.sendMessage(`**Mem Usage**  :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\n` +
`**❯Users**      :: ${client.users.size.toLocaleString()}\n` +
`**❯Servers**    :: ${client.guilds.size.toLocaleString()}\n` +
`**❯Channels**   :: ${client.channels.size.toLocaleString()}\n` +
`**❯Discord.js** :: v${Discord.version}`);
};

if(message.content.startsWith(prefix + 'js')) {
if(message.author.id !== "YOUR_CLIENT_ID") return;
message.channel.sendMessage(`**Discord.js** :: v${Discord.version}`);
}

});

function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}


client.login(settings.token);
