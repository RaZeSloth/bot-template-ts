import * as fs from "fs";
import { Collection } from "discord.js";
export default (client, Discord) => {
    client.commands = new Collection();
    const categories = fs.readdirSync(`../commands/`);
    for (const category of categories) {
        const commandFiles = fs.readdirSync(`${__dirname}/commands/${category}`).filter(File => File.endsWith('.js'));
        for (const file of commandFiles) {
            const command = require(`${__dirname}/commands/${category}/${file}`);
            if (command.name) {
                client.commands.set(command.name, command);
            } else {
                continue;
            }

        }



    }
}