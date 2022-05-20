import Eris, { Client } from 'eris';
import { command } from './interfaces';
import Enmap from 'enmap';
class Bot extends Client {
	public commands: Enmap<string, command>;
	public time_stamps: Enmap<string, number>;
	public cooldown_amount: number;
	public cooldowns: Enmap<string, Enmap<string, number>>;
	constructor(token) {
		super(token, { intents: ['guilds', 'guildMessages'] });
		this.commands = new Enmap();
		this.cooldowns = new Enmap();
	}

	async start(): Promise<this> {
		await (await import('../handlers/command_handler')).default(this, Eris);
		await (await import('../handlers/event_handler')).default(this, Eris);
		this.connect();
		return this;
	}
}

export { Bot };
