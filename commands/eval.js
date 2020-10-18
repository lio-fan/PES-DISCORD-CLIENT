const { Command } = require('discord-akairo');
const Discord = require('discord.js')
class EvalCommand extends Command {
 constructor() {
  super('eval', {
   aliases: ['eval'],
   cooldown: 10000,
   ratelimit: 2,
   clientPermissions: ["ADMINISTRATOR"],
   userPermissions: ["MANAGE_GUILD"]
  });
 }
 async exec(message) {
  console.log(`[COMMAND]: $eval, user: ` + message.author.username + '#' + message.author.discriminator + ', guild: ' + message.guild.name + ', ' + message.guild.id + ', contents: ' + message.content)
  let args = message.content.slice('$'.length).split(/ +/);
  if (message.author.id !== '750519788232507534') return;
 const config = require('../config.json')
  function formatEvalResult(cmd, result, color, e = false) {
   const embed = new Discord.MessageEmbed()
    .setColor(color)
    .addField("Eval", "```js\n" + cmd + "```")
    .addField(e ? "Error" : "Result", "```js\n" + result + "```");
   return embed;
  }
  const cmd = message.content.substring(('$' + "eval").length + 1);
  let result = eval(cmd);
  if (result instanceof Promise) {
   result = await result;
  }
  message.channel.send(formatEvalResult(cmd, result, 0x00FF00));
 } catch (e) {
  message.channel.send(formatEvalResult(cmd, result, 0xFF0000, true));
 }
}
module.exports = EvalCommand;
