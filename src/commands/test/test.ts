import { Message } from 'eris';
import { Bot } from '../../util/client';
import { command } from '../../util/interfaces';
export default {
	name: 'test',
	description: 'a test',
	cooldown: 10,
	aliases: ['t'],
	async execute(client: Bot, message: Message, args: string[], cmd: string): Promise<void> {
		message.channel.createMessage({ messageReference: { messageID: message.id }, content: 'Test works!' });
	},
} as command;
