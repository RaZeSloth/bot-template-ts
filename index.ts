import { Bot } from './src/util/client';
const client = new Bot();
import dotenv from 'dotenv';
dotenv.config();
(async () => {
	await client.spawn(process.env.token).catch(() => {
		console.error('Invalid token!');
		return process.exit();
	});
})();