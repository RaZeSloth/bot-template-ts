import { ApplicationCommandType, ChatInputCommandInteraction } from 'discord.js';
import { Bot } from '../../util/client';
import { command } from '../../util/interfaces';
export default {
	name: 'test',
	description: 'a test',
	type: ApplicationCommandType.ChatInput,
	async execute(client: Bot, interaction: ChatInputCommandInteraction): Promise<void> {
		interaction.reply('Test works!');
	},
} as command;
