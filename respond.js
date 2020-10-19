
const config = require('./config.json')
let colors = config.colors

const fs = require('fs')
let srcdata = fs.readFileSync('src.json');
let src = JSON.parse(srcdata);
function respond(text, message) {
    let color = colors[Math.floor(Math.random() * colors.length)];	 
    return message.channel.send({ embed : { description: `**${message.author.tag}**, ` + text, color: color, timestamp: Date.now(), footer: { text: src.footertext, icon_url: src.footerimage } } })
}
function error(text, message) {
    let color = colors[Math.floor(Math.random() * colors.length)];	 
    return message.channel.send({ embed : { description: `**${message.author.tag}**, ` + text, color: 'ff0000', timestamp: Date.now(), footer: { text: src.footertext, icon_url: src.footerimage } } })
}
function sendAuthor(text, message) {
    let color = colors[Math.floor(Math.random() * colors.length)];	 
    return message.author.send({ embed : { description: `**${message.author.tag}**, ` + text, color: color, timestamp: Date.now(), footer: { text: src.footertext, icon_url: src.footerimage } } })
}
function noTagRespond(text, message) {
    let color = colors[Math.floor(Math.random() * colors.length)];	 
    return message.channel.send({ embed : { description: text, color: color, timestamp: Date.now(), footer: { text: src.footertext, icon_url: src.footerimage } } })
}
function noTagSendAuthor(text, message) {
    let color = colors[Math.floor(Math.random() * colors.length)];	 
    return message.author.send({ embed : { description: text, color: color, timestamp: Date.now(), footer: { text: src.footertext, icon_url: src.footerimage } } })
}
module.exports = {
    respond: respond,
    error: error,
    sendAuthor: sendAuthor,
    noTagRespond: noTagRespond,
    noTagSendAuthor: noTagSendAuthor
}
