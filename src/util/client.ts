import { Client, GatewayIntentBits, Collection } from 'discord.js';
import { command } from './interfaces';

class Bot extends Client {
	public commands: Collection<string, command>;
	public time_stamps: Collection<string, number>;
	public cooldown_amount: number;
	public cooldowns: Map<string, Collection<string, number>>;
	constructor() {
		super({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
		this.commands = new Collection();
		this.cooldowns = new Map();
	}

	async spawn(token: string): Promise<this> {
		await (await import('../handlers/command_handler')).default(this);
		await (await import('../handlers/event_handler')).default(this);
		super.login(token);
		return this;
	}
}

export { Bot };
