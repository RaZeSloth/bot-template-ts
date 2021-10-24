import { Bot } from "../../util/client";

export default (Discord, client: Bot, __) => {
	console.log(`${client.user.username} is online!`);
};
