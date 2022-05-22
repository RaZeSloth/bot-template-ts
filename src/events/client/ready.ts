import { Bot } from '../../util/client';
import { slashCommand } from '../../util/interfaces';

export default async (client: Bot) => {
	console.log(`${(await client.getSelf()).username} is online!`);
	await client.bulkEditGuildCommands('800340311964254228', client.commands.array().filter((s: slashCommand) => s?.type) as slashCommand[]);
};
