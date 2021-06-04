import { Client } from "discord.js";
import * as Discord from "discord.js";
const client = new Client();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
});
require("dotenv").config();

client.login(process.env.token).catch(e => {
    console.error("Invalid token!");
    return process.exit();
});;