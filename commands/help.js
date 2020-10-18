const { Command } = require('discord-akairo');
const Discord = require('discord.js')
const db = require('quick.db')
const fs = require('fs')
class HelpCommand extends Command {
 constructor() {
  super('help', {
   aliases: ['help', 'info', 'information', 'modules', 'commands']
  });
 }
async exec(message, embed) { 
  //log command usage
  console.log(`[COMMAND]: $help, user: ` + message.author.username + '#' + message.author.discriminator + ', guild: ' + message.guild.name + ', ' + message.guild.id + ', contents: ' + message.content)
  //define config, colors, and src
  const config = require('../config.json')
  let colors = config.colors
  let color = colors[Math.floor(Math.random() * colors.length)];	 
  let srcdata = fs.readFileSync('src.json');
  let src = JSON.parse(srcdata);
//send first help message in message channel
message.channel.send(embed(src.helpdescription))
//send the second help message to message author
message.author.send(embed(src.helpdescriptiontwo))
//define function for easy embed usage
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
module.exports = HelpCommand;
