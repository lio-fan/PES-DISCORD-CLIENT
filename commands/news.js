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
    const firstsetnews =  news.newsonename
    const secondsetnews = news.newstwoname
    const thirdsetnews = news.newsthreename
    if(secondsetnews === undefined) {
        noTagRespond('**' + firstsetnews + '**:\n' + news.newsonedescription, message)
        return;
    }
    if(thirdsetnews === undefined) {
        noTagRespond('**' + firstsetnews + '**:\n' + news.newsonedescription  + '\n\n' + '**' + secondsetnews + '**:\n' + news.newstwodescription, message)
        return;
    }
    noTagRespond('**' + firstsetnews + '**:\n' + news.newsonedescription  + '\n\n' + '**' + secondsetnews + '**:\n' + news.newstwodescription  + '\n\n' +  '**' + thirdsetnews + '**:\n' + news.newsthreedescription, message)


 }
}
module.exports = NewsCommand;

