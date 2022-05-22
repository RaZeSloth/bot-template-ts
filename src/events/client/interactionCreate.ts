import { CommandInteraction, Constants, Interaction } from 'eris';
import { Bot } from '../../util/client';
import { slashCommand } from '../../util/interfaces';

export default async (client: Bot, interaction: Interaction) => {
	if (interaction instanceof CommandInteraction && client.commands.has(interaction.data.name)) {
		const command = client.commands.get(interaction.data.name) as slashCommand;
		if (command.type === Constants.ApplicationCommandTypes.CHAT_INPUT) {
			command.execute(client, interaction);
		}
	}
};
