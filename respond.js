
const config = require('./config.json')
let colors = config.colors
let color = colors[Math.floor(Math.random() * colors.length)];	 
const fs = require('fs')
let srcdata = fs.readFileSync('src.json');
let src = JSON.parse(srcdata);
function respond(text, message) {
    return message.channel.send({ embed : { description: `**${message.author.tag}**, ` + text, color: color, timestamp: Date.now(), footer: { text: src.footertext, icon_url: src.footerimage } } })
}
module.exports = {
    respond: respond
}
