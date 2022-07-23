import { ApplicationCommandDataResolvable, ChatInputCommandInteraction } from 'discord.js';
import { Bot } from './client';

type command = ApplicationCommandDataResolvable & {
    execute(client: Bot, interaction: ChatInputCommandInteraction): Promise<unknown> | unknown;
}

export { command };
