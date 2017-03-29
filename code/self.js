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
	console.log('I\'m Online\nI\'m Online');
});

var prefix = "self."
client.on('message', message => {
	var guild = message.guild;
	if (!message.content.startsWith(prefix)) return;
	let args = message.content.split(' ').slice(1);
	var argresult = args.join(' ');
	if (message.author.bot) return;


if(message.content.startsWith(prefix + 'members')) {
	  if(message.author.id !== "138431969418543104") return;
	message.channel.sendMessage(message.guild.memberCount);
};

	if (message.content.startsWith(prefix + 'info')) {
		  if(message.author.id !== "138431969418543104") return;
        message.channel.sendMessage(`${message.author.username}:
**Username:** ${message.author.username}#${message.author.discriminator}
**ID:** ${message.author.id}
**Avatar URL:** ${message.author.avatarURL}`);
    };

if (message.content.startsWith(prefix + 'avatar')) {
    message.reply(message.author.avatarURL);
  };

	if (message.content.startsWith(prefix + 'ping')) {
		  if(message.author.id !== "138431969418543104") return;
		message.channel.sendMessage("", {embed: {
			color: 3447003,
			title: `Pong! \`${Date.now() - message.createdTimestamp} ms\``,
			timestamp: new Date(),
			footer: {
				icon_url: client.user.avatarURL,
				text: '©BB-8'
			}
		}});
	}


if(message.content.startsWith(prefix + 'quote')) {
	  if(message.author.id !== "138431969418543104") return;
  const [replyTo, ...replyText] = args;
    message.channel.fetchMessages({limit: 1, around: replyTo})
    .then(messages=> {
      const replyToMessage = messages.first();
      message.delete();
      message.channel.sendMessage(replyText.join(" "), {embed: {
        color: 3447003,
        author: {
          name: `${replyToMessage.author.username}`,
          icon_url: replyToMessage.author.avatarURL
        },
        description: replyToMessage.content
      }})

      .then(() => message.delete());
    }).catch(console.error);
}





if(message.content.startsWith(prefix + 'roles')) {
	  if(message.author.id !== "138431969418543104") return;
	message.reply(message.guild.roles.map(r => r.name.replace('@everyone', 'Here :arrow_down:')));
};




	if(message.content.startsWith(prefix + 'embedinvite')) {
		if(message.author.id !== "138431969418543104") return;
		message.channel.sendMessage("", {embed: {
		color: 0xF7534C,
		title: 'Invitation for the bot',
		url: 'https://discordapp.com/oauth2/authorize?client_id=251715073553203200&scope=bot&permissions=32014',
		timestamp: new Date(),
		footer: {
			icon_url: client.user.avatarURL,
			text: '©BB-8'
		}
	}});
	};

https://discord.gg/r7Y6hDc

if(message.content.startsWith(prefix + 'ex3invite')) {
	if(message.author.id !== "138431969418543104") return;
	message.channel.sendMessage("", {embed: {
	color: 0xF7B85D,
	title: 'Invitation for the chat',
	url: 'https://discord.gg/r7Y6hDc',
	timestamp: new Date(),
	footer: {
		icon_url: client.user.avatarURL,
		text: '©BB-8'
	}
}});
};


if(message.content.startsWith(prefix + 'stats')) {
	  if(message.author.id !== "138431969418543104") return;
	message.channel.sendMessage(`**Mem Usage**  :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\n` +
`**Users**      :: ${client.users.size.toLocaleString()}\n` +
`**Servers**    :: ${client.guilds.size.toLocaleString()}\n` +
`**Channels**   :: ${client.channels.size.toLocaleString()}\n` +
`**Discord.js** :: v${Discord.version}`);
};

if(message.content.startsWith(prefix + 'js')) {
if(message.author.id !== "138431969418543104") return;
message.channel.sendMessage(`**Discord.js** :: v${Discord.version}`);
}

if(message.content.startsWith(prefix + 'evall'))  {
	if(message.author.id !== "138431969418543104") return;
    let input = `:inbox_tray:**Input:**\n\`\`\`js\n${args.join(' ')}\n\`\`\``;
    return Promise.all([
        new Promise((resolve, reject) => {
            let ev;

            try {
                ev = eval(args.join(' '));

                if(ev && typeof ev.then == 'function' && typeof ev.catch == 'function')   {
                    ev.then(resolve).catch(reject);
                    return;
                }
                resolve(ev);

            }   catch(err)    {
                reject(err);
            }
        }),
    ]).then(resolutions => {
        let out;
        const res = resolutions[0];
        if(typeof res == 'object' && typeof res != 'string')  {
            out = require('util').inspect(res);
            if(typeof out == 'string' && out.length > 1900)   {
                out = res.toString();
            }
        }   else {
            out = res;
        }

        return message.edit(`${input}:white_check_mark:**Output:**\n\`\`\`js\n${out}\n\`\`\``);
    }).catch(err => {
        return message.edit(`${input}:outbox_tray:**Error:**\n\`\`\`js\n${err.message || err}\n\`\`\``);
    });
}


});
//end of the message handler
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}


client.login(settings.token);
