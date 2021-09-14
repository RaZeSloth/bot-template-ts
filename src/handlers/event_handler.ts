import fs from 'fs';
import path from 'path';
import { Bot } from '../../util/client';
export default async (client: Bot, Discord) => {
	const load_dir = async (dir) => {
		const event_files = fs
			.readdirSync(path.resolve(__dirname, `../events/${dir}`))
			.filter((file) => file.endsWith('.ts'));
		for await (const file of event_files) {
			const event = await import(`../events/${dir}/${file}`);
			const event_name = file.split('.')[0];
			client.on(event_name, event.default.bind(null, client));
		}
	};
	['client', 'guild'].forEach((e) => load_dir(e));
};
