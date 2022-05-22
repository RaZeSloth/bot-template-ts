import Enmap from 'enmap';
import { Message } from 'eris';
import ms from 'pretty-ms';
import { Bot } from '../../util/client';
import { command, slashCommand } from '../../util/interfaces';
export default async (client: Bot, message: Message) => {
	// PREFIX
	const prefix = process.env.prefix || 'ts ';
	if (!message.content.toLowerCase().startsWith(prefix) || message.author.bot) { return; }

	const args = message.content.slice(prefix.length).split(/ +/);
	const cmd = args.shift().toLowerCase();
	const command =
		client.commands.find((c: command | slashCommand) => c.name === cmd && !(c as slashCommand)?.type) as command ||
		client.commands.find((r:command) => r?.aliases && r?.aliases?.includes(cmd)) as command;
	try {
		if (!client.cooldowns.has(command.name)) {
			client.cooldowns.set(command.name, new Enmap());
		}
	}
	catch (e) {
		return;
	}

	const current_time = Date.now();
	client.time_stamps = client.cooldowns.get(command.name);
	client.cooldown_amount = command.cooldown * 1000;

	if (client.time_stamps.has(message.author.id)) {
		const expiration_time =
			client.time_stamps.get(message.author.id) + client.cooldown_amount;
		if (current_time < expiration_time) {
			const time_left = (expiration_time - current_time) / 1000;

			return message.channel
				.createMessage(
					`Oops you are on a cooldown for ${ms(time_left * 1000, {
						verbose: true,
					})}!`,
				)
				.then((m: Message) => {
					setTimeout(() => m.delete(), 2500);
				});
		}
	}
	client.time_stamps.set(message.author.id, current_time);
	setTimeout(
		() => client.time_stamps.delete(message.author.id),
		client.cooldown_amount,
	);
	try {
		if (command) command.execute(client, message, args, cmd);
	}
	catch (err) {
		message.channel.createMessage(':x: | Got an error... ' + err);
		console.log(err);
	}
};
