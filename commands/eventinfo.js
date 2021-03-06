const { Command } = require('discord-akairo'); const db = require('quick.db'); const Discord = require('discord.js'); let responding = require('../respond.js'); let error = responding.error; let noTagRespond = responding.noTagRespond; let respond = responding.respond; let sendAuthor = responding.sendAuthor; const fs = require('fs'); let srcdata = fs.readFileSync('src.json'); let src = JSON.parse(srcdata); let eventsdata = fs.readFileSync('events.json'); let events = JSON.parse(eventsdata);
class EventInfoCommand extends Command {
 constructor() {
  super('eventinfo', {
   aliases: ['eventinfo']
  });
 }
async exec(message, embed) { 
const args = message.content.slice('$eventinfo'.length).trim().split(/ +/);
let number = args[0]  
const finale = events['event' + number + 'name']
console.log(finale)
if(finale === undefined) {
    error(src.notacurrentevent, message)
    return;
}
const description = events['event' + number + 'description']
const teamtype = events['event' + number + 'teamtype']
noTagRespond(finale + '\n\n**About This Event:**\n' + description + '\n\n**Team Type:**\n' + teamtype, message) 

 }
}
module.exports = EventInfoCommand;
