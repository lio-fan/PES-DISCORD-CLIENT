const { Command } = require('discord-akairo'); const Discord = require('discord.js'); let responding = require('../respond.js'); let noTagRespond = responding.noTagRespond; let error = responding.error; let respond = responding.respond; let sendingauthor = require('../sendauthor.js'); let sendAuthor = sendingauthor.sendAuthor; const fs = require('fs'); let srcdata = fs.readFileSync('src.json'); let src = JSON.parse(srcdata); let boxdrawdata = fs.readFileSync('draws.json'); let draws = JSON.parse(boxdrawdata); let eventsdata = fs.readFileSync('events.json'); let events = JSON.parse(eventsdata);
class BowDrawsCommand extends Command {
 constructor() {
  super('boxdraws', {
   aliases: ['boxdraws', 'draws']
  });
 }
async exec(message, embed) { 
    const count = draws.count
    if(count === '0') {
        error(src.nodraws, message)
    }
    if(count === '1') {
        noTagRespond('*One:* **'  + draws.drawonename + '**\n' + draws.drawonedescription, message)
        }
      if(count === '2') {
      noTagRespond('*One:* **' + draws.drawonename + '**\n' + draws.drawsonedescription + '\n\n*Two:* **' +  draws.drawstwoname + '**\n' + draws.drawstwodescription, message)
        }
      if(count === '3') {
        noTagRespond('*One:* **' + draws.drawonename + '**\n' + draws.drawonedescription + '\n\n*Two:* **' +  draws.drawotwoname + '**\n' + draws.drawtwodescription + '\n\n*Three:* **' +  draws.drawthreename + '**\n' + draws.drawthreedescription, message)
        }
      if(count === '4') {
        noTagRespond('*One:* **' + draws.drawonename + '**\n' + draws.drawonedescription + '\n\n*Two:* **' +  draw.drawtwoname + '**\n' + draws.drawtwodescription + '\n\n*Three:* **' +  draws.drawthreename + '**\n' + draws.drawthreedescription  + '\n\n*Four:* **' +  draws.drawfourname + '**\n' + draws.drawfourdescription, message)
        }
      if(count === '5') {
        noTagRespond('*One:* **' + draws.drawonename + '**\n' + draws.drawonedescription + '\n\n*Two:* **' +  draws.drawtwoname + '**\n' + draws.drawtwodescription + '\n\n*Three:* **' +  draws.drawthreename + '**\n' + draws.drawthreedescription  + '\n\n*Four:* **' +  draws.drawfourname + '**\n' + draws.drawfourdescription  + '\n\n*Five:* **' +  draws.drawfivename + '**\n' + draws.drawfivedescription, message)
        } 


 }
}
module.exports = BowDrawsCommand;

