const { Command } = require('discord-akairo'); const db = require('quick.db'); const Discord = require('discord.js'); let responding = require('../respond.js'); let error = responding.error; let noTagRespond = responding.noTagRespond; let respond = responding.respond; let sendAuthor = responding.sendAuthor; const fs = require('fs'); let srcdata = fs.readFileSync('src.json'); let src = JSON.parse(srcdata); let eventsdata = fs.readFileSync('events.json'); let events = JSON.parse(eventsdata);
class EventsCommand extends Command {
 constructor() {
  super('events', {
   aliases: ['events', 'currentevents', 'pesevents', 'eventlist', 'listevents']
  });
 }
async exec(message, embed) { 
const count = events.count;
if(count === '0') {
  error(src.noevents, message)
  return;
}
if(count === '1') {
  noTagRespond('**'  +events.eventonename + '**\n' + events.eventonedescription, message)
  }
if(count === '2') {
noTagRespond('**'  +events.eventonename + '**\n' + events.eventonedescription + '\n\n**' +  events.eventtwoname + '**\n' + events.eventtwodescription, message)
}
if(count === '3') {
  noTagRespond('**'  +events.eventonename + '**\n' + events.eventonedescription + '\n\n**' +  events.eventtwoname + '**\n' + events.eventtwodescription + '\n\n**' +  events.eventthreename + '**\n' + events.eventthreedescription, message)
  }
if(count === '4') {
  noTagRespond('**'  +events.eventonename + '**\n' + events.eventonedescription + '\n\n**' +  events.eventtwoname + '**\n' + events.eventtwodescription + '\n\n**' +  events.eventthreename + '**\n' + events.eventthreedescription  + '\n\n**' +  events.eventfourname + '**\n' + events.eventfourdescription, message)
  }
  if(count === '5') {
  noTagRespond('**'  +events.eventonename + '**\n' + events.eventonedescription + '\n\n**' +  events.eventtwoname + '**\n' + events.eventtwodescription + '\n\n**' +  events.eventthreename + '**\n' + events.eventthreedescription  + '\n\n**' +  events.eventfourname + '**\n' + events.eventfourdescription  + '\n\n**' +  events.eventfivename + '**\n' + events.eventfivedescription, message)
  }  
 }
}
module.exports = EventsCommand;
