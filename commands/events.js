const { Command } = require('discord-akairo'); const Discord = require('discord.js'); let responding = require('../respond.js'); let respond = responding.respond; let sendingauthor = require('../sendauthor.js'); let sendAuthor = sendingauthor.sendAuthor; const fs = require('fs'); let srcdata = fs.readFileSync('src.json'); let src = JSON.parse(srcdata); let eventsdata = fs.readFileSync('events.json'); let events = JSON.parse(eventsdata);
class EventsCommand extends Command {
 constructor() {
  super('events', {
   aliases: ['events', 'currentevents', 'pesevents', 'eventlist', 'listevents']
  });
 }
async exec(message, embed) { 
  const config = require('../config.json')
  let colors = config.colors
  let color = colors[Math.floor(Math.random() * colors.length)];	 
const count = events.count;
message.channel.send(embed())
function embed(text) {
  let embed = new Discord.MessageEmbed();
  embed.setColor(color);
  embed.addField(events.eventonename, events.eventonedescription);
  embed.setTimestamp()
  embed.setFooter(src.footertext, src.footerimage)
  return embed;
};
 }
}
module.exports = EventsCommand;
