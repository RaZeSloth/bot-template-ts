import { Interaction } from 'discord.js';
import { Bot } from '../../util/client';

export default async (client: Bot, interaction: Interaction) => {
	if (interaction.isChatInputCommand()) {
		if (client.commands.has(interaction.commandName)) {
			try {
				await client.commands.get(interaction.commandName).execute(client, interaction);
			}
			catch (e) {
				console.error(e);
			}
		}
		else {
			interaction.reply(`Command ${interaction.commandName} not found.`);
		}
	}
};
