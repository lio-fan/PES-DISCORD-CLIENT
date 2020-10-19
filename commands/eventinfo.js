const { Command } = require('discord-akairo'); const db = require('quick.db'); const Discord = require('discord.js'); let responding = require('../respond.js'); let error = responding.error; let noTagRespond = responding.noTagRespond; let respond = responding.respond; let sendAuthor = responding.sendAuthor; const fs = require('fs'); let srcdata = fs.readFileSync('src.json'); let src = JSON.parse(srcdata); let eventsdata = fs.readFileSync('events.json'); let events = JSON.parse(eventsdata);
class EventInfoCommand extends Command {
 constructor() {
  super('event', {
   aliases: ['event']
  });
 }
async exec(message, embed) { 
const args = message.content.slice('$event'.length).trim().split(/ +/);
let number = args[0]  
const finale = events['event' + number + 'name']
if(finale === undefined) {
    error(src.notacurrentevent, message)
    return;
}
const description = events['event' + number + 'description']
const teamtype = events['event' + number + 'teamtype']
const rewards = events['event' + number + 'rewardtype']
const opponenttype = events['event' + number + 'type']
noTagRespond(finale + '\n\n**Reward Type:**\n' + rewards + '\n\n**Team Type:**\n' + teamtype + '\n\n**Opponent Type:**\n' + opponenttype, message) 

 }
}
module.exports = EventInfoCommand;
