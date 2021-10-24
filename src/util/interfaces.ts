import { Message } from "discord.js";
import { Bot } from "./client";

interface command {
    name: string;
    description?: string;
    aliases?: string[];
    cooldown: number;
    execute(client: Bot, message: Message, args?: string[], cmd?: string): Promise<any> | any;
}

export { command }