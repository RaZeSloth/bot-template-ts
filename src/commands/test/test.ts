import { Message } from 'discord.js';
import { Bot } from '../../../util/client';
export default {
	name: 'test',
	description: 'a test',
	cooldown: 10,
	aliases: ['t'],
	execute(client: Bot, message: Message, args: string[], cmd: string): void {
		message.channel.send('Test work!');
		return;
	},
};
