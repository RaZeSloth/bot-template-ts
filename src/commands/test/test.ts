import { Message } from 'discord.js';
import { Bot } from '../../util/client';
import { command } from '../../util/interfaces';
export default {
	name: 'test',
	description: 'a test',
	cooldown: 10,
	aliases: ['t'],
	execute(client: Bot, message: Message, args: string[], cmd: string): void {
		message.channel.send('Test works!');
		return;
	},
} as command;
