import { Message } from "discord.js";
const cooldowns = new Map()
const ms = require('pretty-ms');
module.exports = async (Discord, client, message: Message) => {
    const prefix = '>';//CHANGABLE
    if (!message.content.toLowerCase().startsWith(prefix) || message.author.bot) return;
   
    message.channel
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(r => r.aliases && r.aliases.includes(cmd));
    try {
        if (!cooldowns.has(command.name)) {
            cooldowns.set(command.name, new Discord.Collection())
        }
    } catch (e) {
        return;
    }

    const current_time = Date.now()
    client.time_stamps = cooldowns.get(command.name)
    client.cooldown_amount = (command.cooldown) * 1000

    if (client.time_stamps.has(message.author.id)) {
        const experation_time = client.time_stamps.get(message.author.id) + client.cooldown_amount
        if (current_time < experation_time) {
            const time_left = (experation_time - current_time) / 1000;

            return message.channel.send(`Oops you are on a cooldown for ${ms(time_left * 1000, { verbose: true })}!`).then(cooldownmessage => { cooldownmessage.delete({ timeout: 2550 }) });
        }
    }
    client.time_stamps.set(message.author.id, current_time)
    setTimeout(() => client.time_stamps.delete(message.author.id), client.cooldown_amount)
    try {
        if (command) command.execute(client, message, args, Discord, cmd);
    } catch (err) {
        message.channel.send(':x: | Got an error... ' + err)
    }
}