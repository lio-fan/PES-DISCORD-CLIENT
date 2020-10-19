const { Command } = require('discord-akairo'); const Discord = require('discord.js'); let responding = require('../respond.js'); let error = responding.error; let respond = responding.respond; let sendingauthor = require('../sendauthor.js'); let sendAuthor = sendingauthor.sendAuthor; const fs = require('fs');const { noTagRespond } = require('../respond.js');
 let newsdata = fs.readFileSync('news.json'); let news = JSON.parse(newsdata); let srcdata = fs.readFileSync('src.json'); let src = JSON.parse(srcdata); let boxdrawdata = fs.readFileSync('draws.json'); let bowdraws = JSON.parse(boxdrawdata); let eventsdata = fs.readFileSync('events.json'); let events = JSON.parse(eventsdata);
class NewsCommand extends Command {
 constructor() {
  super('news', {
   aliases: ['news', 'konaminews']
  });
 }
async exec(message, embed) { 
    const count = news.count
    console.log(count)
    if(count === '0') {
        error(src.nonews, message)
        return;
    }
        if(news.newstwoname === undefined) {
        noTagRespond('**' + news.newsonename + '**:\n' + news.newsonedescription, message)
        return;
    }
    if(news.newsthreename === undefined) {
        noTagRespond('**' + news.newsonename + '**:\n' + news.newsonedescription  + '\n\n' + '**' + news.newstwoname + '**:\n' + news.newstwodescription, message)
        return;
    }
    noTagRespond('**' + news.newsonename + '**:\n' + news.newsonedescription  + '\n\n' + '**' + news.newstwoname + '**:\n' + news.newstwodescription  + '\n\n' +  '**' + news.newsthreename + '**:\n' + news.newsthreedescription, message)


 }
}
module.exports = NewsCommand;

