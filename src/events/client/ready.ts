import { Bot } from '../../util/client';

export default async (client: Bot) => {
	console.log(`${(await client.getSelf()).username} is online!`);
};
