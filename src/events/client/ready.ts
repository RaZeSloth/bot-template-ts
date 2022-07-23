import { Bot } from '../../util/client';

export default (Discord, client: Bot, __) => {
	console.log(`${client.user.username} is online!`);
	const commands = [...client.commands.values()];

	if (process.env.testGuild) {
		client.guilds.cache.get(process.env.testGuild).commands.set(commands);
	}
	else {
		client.application.commands.set(commands);
	}
};
