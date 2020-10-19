const { Command } = require('discord-akairo'); const db = require('quick.db'); const Discord = require('discord.js'); let responding = require('../respond.js'); let error = responding.error; let noTagRespond = responding.noTagRespond; let respond = responding.respond; let sendAuthor = responding.sendAuthor; const fs = require('fs'); let drawdata = fs.readFileSync('draws.json'); let draws = JSON.parse(drawdata); let srcdata = fs.readFileSync('src.json'); let src = JSON.parse(srcdata); let eventsdata = fs.readFileSync('events.json'); let events = JSON.parse(eventsdata);
class EventInfoCommand extends Command {
 constructor() {
  super('drawinfo', {
   aliases: ['draw']
  });
 }
async exec(message, embed) { 
const args = message.content.slice('$draw'.length).trim().split(/ +/);
let number = args[0]  
const finale = draws['draw' + number + 'name']
if(finale === undefined) {
    error(src.notacurrentdraw, message)
    return;
}
const description = draws['draw' + number + 'description']
const cost = draws['draw' + number + 'cost']
const topplayers = draws['draw' + number + 'topplayers']
noTagRespond('**' + finale + '**\n\n**Description:**\n' + description + '\n\n**Cost:**\n' + cost + '\n\n**Top Players:**\n' + topplayers, message) 

 }
}
module.exports = EventInfoCommand;
