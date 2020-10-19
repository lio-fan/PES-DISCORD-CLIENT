const { Command } = require('discord-akairo'); const db = require('quick.db'); const Discord = require('discord.js'); let responding = require('../respond.js'); let error = responding.error; let respond = responding.respond; let sendingauthor = require('../sendauthor.js'); let sendAuthor = sendingauthor.sendAuthor; const fs = require('fs');const { noTagRespond } = require('../respond.js');
class SetIDCommand extends Command {
 constructor() {
  super('setid', {
   aliases: ['setid']
  });
 }
async exec(message, embed) { 	 
  let srcdata = fs.readFileSync('src.json');
  let src = JSON.parse(srcdata);
  const args = message.content.slice('$setid'.length).trim().split(/ +/);
  let number = args[0]
  if(number.length !== 11) {
    error(src.wrongusagesetid, message)
        return;
  }
  db.set(message.author.id, number);
  respond(`you've successfully set your id as **${number}**.`, message)
 }
}

module.exports = SetIDCommand;
