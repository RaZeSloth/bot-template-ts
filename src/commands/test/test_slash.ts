import { CommandInteraction, Constants } from 'eris';
import { Bot } from '../../util/client';
import { slashCommand } from '../../util/interfaces';

export default {
	name: 'test_slash',
	description: 'a test',
	type: Constants.ApplicationCommandTypes.CHAT_INPUT,
	async execute(client: Bot, interaction:CommandInteraction) {
		await interaction.createMessage({ content: 'Test works!', flags: Constants.MessageFlags.EPHEMERAL });
	},
} as slashCommand;
