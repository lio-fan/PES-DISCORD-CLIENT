const { Listener } = require('discord-akairo');
class CommandBlockedListener extends Listener {
    constructor() {
        super('command', {
            emitter: 'commandHandler',
            event: 'commandStarted'
        });
    }
    exec(message, command, reason) {
        
        console.log(`[COMMAND]: $${command.id}, user: ` + message.author.username + '#' + message.author.discriminator + ', guild: ' + message.guild.name + ', ' + message.guild.id + ', contents: ' + message.content + ' @ ' + new Date())
    }
}

module.exports = CommandBlockedListener;