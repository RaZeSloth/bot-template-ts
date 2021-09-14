import { Client } from 'discord.js';
import Discord from 'discord.js';
import { Bot } from './util/client';

const client = new Bot()
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
