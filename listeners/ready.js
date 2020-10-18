const { Listener } = require("discord-akairo");
class Ready extends Listener {
    constructor() {
        super('ready', {
            event: 'ready',
            emitter: 'client',
        })
    }
    exec() {
        this.client.user.setActivity('$help', {
            type: "PLAYING"
        });
        console.log('[READY] ' + new Date())
    }
}
module.exports = Ready;