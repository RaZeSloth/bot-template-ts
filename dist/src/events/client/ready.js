"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = async (client) => {
    console.log(`${(await client.getSelf()).username} is online!`);
};
