import Discord, { Client, Intents, Collection } from "discord.js";
import { command } from "./interfaces";

class Bot extends Client {
    public commands: Collection<string, command>
    public time_stamps: Collection<string, number>
    public cooldown_amount: number;
    public cooldowns: Map<string, Collection<string, number>>
    constructor() {
        super({ intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES ] });
        this.commands = new Collection();
        this.cooldowns = new Map();
    }
    async spawn(token: string): Promise<this> {
        await (await import('../handlers/command_handler')).default(this, Discord);
       await (await import('../handlers/event_handler')).default(this, Discord);
        super.login(token);
        return this;
    }
}

export { Bot };