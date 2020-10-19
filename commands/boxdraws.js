const { Command } = require('discord-akairo'); const Discord = require('discord.js'); let responding = require('../respond.js'); let error = responding.error; let respond = responding.respond; let sendingauthor = require('../sendauthor.js'); let sendAuthor = sendingauthor.sendAuthor; const fs = require('fs'); let srcdata = fs.readFileSync('src.json'); let src = JSON.parse(srcdata); let boxdrawdata = fs.readFileSync('draws.json'); let bowdraws = JSON.parse(boxdrawdata); let eventsdata = fs.readFileSync('events.json'); let events = JSON.parse(eventsdata);
class BowDrawsCommand extends Command {
 constructor() {
  super('boxdraws', {
   aliases: ['boxdraws']
  });
 }
async exec(message, embed) { 
    const count = bowdraws.count
    console.log(count)
    if(count === '0') {
        error(src.nodraws, message)
    }

 }
}
module.exports = BowDrawsCommand;

