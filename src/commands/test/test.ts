import { Client, Message } from "discord.js";
console.log("sus")
export default {
    name: "test",
    description: "a test",
    execute(client:Client, message:Message, args: string[], Discord: any, cmd: string): void {
        message.channel.send("Test work!")
        return;
    }
}