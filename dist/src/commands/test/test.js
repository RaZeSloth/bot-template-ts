"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'test',
    description: 'a test',
    cooldown: 10,
    aliases: ['t'],
    async execute(client, message, args, cmd) {
        message.channel.createMessage({ messageReference: { messageID: message.id }, content: 'Test works!' });
    },
};
