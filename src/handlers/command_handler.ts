import fs from 'fs';
import path from 'path';
import { Collection } from 'discord.js';
import { Bot } from '../../util/client';
export default async (client: Bot, Discord) => {

	const commandDir = '../../src/commands/';
	const categories = fs.readdirSync(path.resolve(__dirname, '../commands'));
	for await (const category of categories) {
		const commandFiles = fs
			.readdirSync(path.resolve(__dirname, `../commands/${category}`))
			.filter((File) => File.endsWith('.ts'));
		for await (const file of commandFiles) {
			const command = await import(`../commands/${category}/${file}`);
			if (command.default.name) {
				client.commands.set(command.default.name, command.default);
			} else {
				continue;
			}
		}
	}
};
