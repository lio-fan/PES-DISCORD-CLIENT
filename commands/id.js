const { Command } = require('discord-akairo'); const Discord = require('discord.js'); const db = require('quick.db'); let responding = require('../respond.js'); let respond = responding.respond; let sendingauthor = require('../sendauthor.js'); let sendAuthor = sendingauthor.sendAuthor; const fs = require('fs'); let srcdata = fs.readFileSync('src.json'); let src = JSON.parse(srcdata); let eventsdata = fs.readFileSync('events.json'); let events = JSON.parse(eventsdata);
class IDCommand extends Command {
 constructor() {
  super('id', {
   aliases: ['id']
  });
 }
async exec(message, embed) { 
  const finduser = message.mentions.members.first()
  if(!finduser) {
    let id = db.get(message.author.id)
    if(id === null) {
        respond(src.youhaventsetid, message)
        return;
      }
    respond(`your id is: **` + id + '**\n\nIf you want to view someone else\'s ID, ping them after $id. **Example:** $id <@750519788232507534>', message)
    return;
  }
  let id = db.get(finduser.id)
  if(id === null) {
    respond(src.userhasntsetid, message)
    return;
  }
  respond(`${finduser}'s ID is: **` + id + `**.`, message)
  return;
 }
}
module.exports = IDCommand;
