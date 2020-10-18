const { Command } = require('discord-akairo');
const Discord = require('discord.js')
const db = require('quick.db')
const fs = require('fs')
class SetIDCommand extends Command {
 constructor() {
  super('setid', {
   aliases: ['setid']
  });
 }
async exec(message, embed) { 
  //log command usage
  console.log(`[COMMAND]: $setid, user: ` + message.author.username + '#' + message.author.discriminator + ', guild: ' + message.guild.name + ', ' + message.guild.id + ', contents: ' + message.content)
  //define config, colors, and src
  const config = require('../config.json')
  let colors = config.colors
  let color = colors[Math.floor(Math.random() * colors.length)];	 
  let srcdata = fs.readFileSync('src.json');
  let src = JSON.parse(srcdata);
  const args = message.content.slice('$setid'.length).trim().split(/ +/);
  let number = args[0]

  if(number.length !== 11) {
    message.channel.send(embed('**You\'re incorrectly using this command.**\n**Usage:**\n``$setid <id>``\n**Example:**\n``$setid 123-123-123`` put ``-`` between each 3 no. group!'))
    return;
  }
  db.set(message.author.id, number);
  let rep = db.get(message.author.id)
  
  message.channel.send(embed(`you've successfully set your id as **${number}**.`))
//send first help message in message channel

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

module.exports = SetIDCommand;
