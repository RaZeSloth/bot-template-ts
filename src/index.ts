import 'dotenv/config';

import { Bot } from './util/client';
const client = new Bot();
(async () => {
	await client.spawn(process.env.token).catch(() => {
		console.error('Invalid token!');
		return process.exit();
	});
})();
