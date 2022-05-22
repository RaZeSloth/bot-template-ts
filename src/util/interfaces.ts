import { ApplicationCommandStructure, CommandInteraction, Message } from 'eris';
import { Bot } from './client';

interface command {
    name: string;
    description?: string;
    aliases?: string[];
    cooldown: number;
    execute(client: Bot, message: Message, args?: string[], cmd?: string): Promise<any> | any;
}
type slashCommand = ApplicationCommandStructure & { execute(client: Bot, interaction: CommandInteraction): Promise<any> | any }
export { command, slashCommand };
