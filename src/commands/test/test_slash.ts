import { Constants } from 'eris';
import { slashCommand } from '../../util/interfaces';

export default {
	name: 'test_slash',
	description: 'a test',
	type: Constants.ApplicationCommandTypes.CHAT_INPUT,
	async execute(client, interaction, args) {
		await interaction.createMessage({ content: 'Test works!', flags: Constants.MessageFlags.EPHEMERAL });
	},
} as slashCommand;
