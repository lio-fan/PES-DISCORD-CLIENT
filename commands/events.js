const { Command } = require('discord-akairo');
const Discord = require('discord.js')
const db = require('quick.db')
const fs = require('fs')
class EventsCommand extends Command {
 constructor() {
  super('events', {
   aliases: ['events', 'currentevents', 'pesevents', 'eventlist', 'listevents']
  });
 }

async exec(message, embed) { 
  //log command usage
  console.log(`[COMMAND]: $events, user: ` + message.author.username + '#' + message.author.discriminator + ', guild: ' + message.guild.name + ', ' + message.guild.id + ', contents: ' + message.content)
  //define config, colors, and src
  const config = require('../config.json')
  let colors = config.colors
  let color = colors[Math.floor(Math.random() * colors.length)];	 
  let srcdata = fs.readFileSync('src.json');
  let src = JSON.parse(srcdata);
  let eventsdata = fs.readFileSync('events.json')
  let events = JSON.parse(eventsdata)
  //define event count/amount
  const count = events.count;
//send event information
message.channel.send(embed())
//define function for easy embed usage
function embed(text) {
  let embed = new Discord.MessageEmbed();
  embed.setColor(color);
  embed.addField(events.eventonename, events.eventonedescription);
  //embed.addField(events.eventtwoname, events.eventtwodescription);
  //embed.addField(events.eventthreename, events.eventthreedescription);
  //embed.addField(events.eventfourname, events.eventfourdescription);
  //embed.addField(events.eventfivename, events.eventfivedescription);
  //embed.addField(events.eventsixname, events.eventsixdescription);
  //embed.addField(events.eventsevenname, events.eventsevendescription);
  embed.setTimestamp()
  embed.setFooter(src.footertext, src.footerimage)
  return embed;
};
 }
}
module.exports = EventsCommand;
