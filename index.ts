import { Bot } from './src/util/client';
import 'dotenv/config';
const client = new Bot('Bot ' + process.env.token);
(async () => await client.start())();
