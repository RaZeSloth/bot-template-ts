import { Client } from "discord.js";
import * as Discord from "discord.js";
const client = new Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES]});
import handlers from ""
require("dotenv").config();

client.login(process.env.token).catch(() => {
    console.error("Invalid token!");
    return process.exit();
});;