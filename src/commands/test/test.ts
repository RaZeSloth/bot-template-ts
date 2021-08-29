import { Client, Message } from "discord.js";
export default {
    name: "test",
    description: "a test",
    cooldown: 10,
    aliases: ["t"],
    execute(client:Client, message:Message, args: string[], cmd: string): void {
        message.channel.send("Test work!")
        return;
    }
}