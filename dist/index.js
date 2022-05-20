"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./src/util/client");
require("dotenv/config");
const client = new client_1.Bot('Bot ' + process.env.token);
(async () => await client.start())();
