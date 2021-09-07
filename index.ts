import { Client } from 'discord.js';
import Discord from 'discord.js';
const client = new Client({
	intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES],
});
import ch from './src/handlers/command_handler';
import eh from './src/handlers/event_handler';
ch(client, Discord);
eh(client, Discord);
import dotenv from 'dotenv';
dotenv.config();
client.login(process.env.token).catch(() => {
	console.error('Invalid token!');
	return process.exit();
});
