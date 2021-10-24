import { Client, Intents, Collection } from "discord.js";
import { command } from "./interfaces";

class Bot extends Client {
    commands: Collection<string, command>
	time_stamps: Collection<string, number>
    cooldown_amount: number;
    cooldowns: Map<string, Collection<string, number>>
    constructor() {
        super({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
        this.commands = new Collection();
        this.cooldowns = new Map();
    }

 
}

export { Bot };