const { Command } = require('discord-akairo'); const Discord = require('discord.js'); let responding = require('../respond.js'); let respond = responding.respond; let sendingauthor = require('../sendauthor.js'); let sendAuthor = sendingauthor.sendAuthor; const fs = require('fs'); let srcdata = fs.readFileSync('src.json'); let src = JSON.parse(srcdata); let eventsdata = fs.readFileSync('events.json'); let events = JSON.parse(eventsdata);
class HelpCommand extends Command {
 constructor() {
  super('help', {
   aliases: ['help', 'info', 'information', 'modules', 'commands']
  });
 }
async exec(message, embed) { 
respond(src.helpmessage, message)
sendAuthor(src.helpDM, message)
 }
}
module.exports = HelpCommand;
