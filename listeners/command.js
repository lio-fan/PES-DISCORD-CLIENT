const { Listener } = require('discord-akairo');
const Discord = require('discord.js')
class CommandBlockedListener extends Listener {
    constructor() {
        super('command', {
            emitter: 'commandHandler',
            event: 'commandStarted'
        });
    }

    exec(message, command, reason) {
        const config = require('../config.json')
        let colors = config.colors
        let color = colors[Math.floor(Math.random() * colors.length)];	 
        const fs = require('fs')
        let srcdata = fs.readFileSync('src.json');
        let src = JSON.parse(srcdata);

        console.log(`[COMMAND]: $${command.id}, user: ` + message.author.username + '#' + message.author.discriminator + ', guild: ' + message.guild.name + ', ' + message.guild.id + ', contents: ' + message.content)
        //message.channel.send(embed(`you can't use the **$${command.id}** command because you're not an **${reason}**.`))
        //message.channel.send(`${message.author.username} was blocked from using ${command.id} because of ${reason}!`);
        function embed(text) {
            let embed = new Discord.MessageEmbed();
            embed.setColor(color);
            embed.setDescription('**' + message.author.username + '#' + message.author.discriminator + `**, `+ text);
            embed.setTimestamp()
            embed.setFooter(src.footertext, src.footerimage)
            return embed;
          };
    }
}

module.exports = CommandBlockedListener;