import { Client, Message, Collection } from 'discord.js';
import ms from 'pretty-ms';
import { Bot } from '../../util/client';
export default async (client: Bot, message: Message) => {
	const prefix = process.env.prefix || 'ts '; //PREFIX
	if (!message.content.toLowerCase().startsWith(prefix) || message.author.bot)
		return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const cmd = args.shift().toLowerCase();
	const command =
		client.commands.get(cmd) ||
		client.commands.find((r) => r.aliases && r.aliases.includes(cmd));
	try {
		if (!client.cooldowns.has(command.name)) {
			client.cooldowns.set(command.name, new Collection());
		}
	} catch (e) {
		return;
	}

	const current_time = Date.now();
	client.time_stamps = client.cooldowns.get(command.name);
	client.cooldown_amount = command.cooldown * 1000;

	if (client.time_stamps.has(message.author.id)) {
		const experation_time =
			client.time_stamps.get(message.author.id) + client.cooldown_amount;
		if (current_time < experation_time) {
			const time_left = (experation_time - current_time) / 1000;

			return message.channel
				.send(
					`Oops you are on a cooldown for ${ms(time_left * 1000, {
						verbose: true,
					})}!`
				)
				.then((m) => {
					setTimeout(() => m.delete(), 2500);
				});
		}
	}
	client.time_stamps.set(message.author.id, current_time);
	setTimeout(
		() => client.time_stamps.delete(message.author.id),
		client.cooldown_amount
	);
	try {
		if (command) command.execute(client, message, args, cmd);
	} catch (err) {
		message.channel.send(':x: | Got an error... ' + err);
		console.log(err);
	}
};
