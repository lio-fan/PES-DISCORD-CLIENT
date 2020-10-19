const { Command } = require('discord-akairo'); const Discord = require('discord.js'); let responding = require('../respond.js'); let respond = responding.respond;  let noTagSendAuthor = responding.noTagSendAuthor; let sendingauthor = require('../sendauthor.js'); let sendAuthor = sendingauthor.sendAuthor; const fs = require('fs'); let srcdata = fs.readFileSync('src.json'); let src = JSON.parse(srcdata); let eventsdata = fs.readFileSync('events.json'); let events = JSON.parse(eventsdata);
class HelpCommand extends Command {
 constructor() {
  super('help', {
   aliases: ['help', 'info', 'information', 'modules', 'commands']
  });
 }
async exec(message, embed) { 
  respond(src.helpmessage, message)
  noTagSendAuthor(src.helpDM + '\n\n**' + src.commandonename + '**\n' + src.commandonedescription + '\n\n**' + src.commandtwoname + '**\n' + src.commandtwodescription + '\n\n**' + src.commandthreename + '**\n' + src.commandthreedescription + '\n\n**' + src.commandfourname + '**\n' + src.commandfourdescription + '\n\n**' + src.commandfivename + '**\n' + src.commandfivedescription + '\n\n**' + src.commandsixname + '**\n' + src.commandsixdescription + '\n\n**' + src.commandsevenname + '**\n' + src.commandsevendescription, message)
 }
}
module.exports = HelpCommand;
