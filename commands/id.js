const { Command } = require('discord-akairo');
const Discord = require('discord.js')
const db = require('quick.db')
const fs = require('fs')
class IDCommand extends Command {
 constructor() {
  super('id', {
   aliases: ['id']
  });
 }

async exec(message, embed) { 
  //define config, colors, and src
  const config = require('../config.json')
  let colors = config.colors
  let color = colors[Math.floor(Math.random() * colors.length)];	 
  let srcdata = fs.readFileSync('src.json');
  let src = JSON.parse(srcdata);
  
  const finduser = message.mentions.members.first()
  if(!finduser) {
    let id = db.get(message.author.id)
    if(id === null) {
        message.channel.send(embed(src.youhaventsetid))
        return;
      }
    message.channel.send(embed(`your id is: **` + id + '**\n\nIf you want to view someone else\'s ID, ping them after $id. **Example:** $id <@750519788232507534>'))
    return;
  }
  let id = db.get(finduser.id)
  if(id === null) {
    message.channel.send(embed(src.finduseridnoexist))
    return;
  }
  message.channel.send(embed(`${finduser}'s ID is: **` + id + `**.`))
  return;
  //msg.channel.send(id)
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

module.exports = IDCommand;
