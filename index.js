import dotenv from 'dotenv';
dotenv.config();

import { Client, GatewayIntentBits } from 'discord.js';

import pastas from './pastas.json' assert { type: 'json' };
// console.log(pastas.seal)
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.login(process.env.DISCORD_TOKEN);

client.on('messageCreate', async (message) => {
    console.log(message);
    console.log(message.content);

    if (!message?.author.bot && message.content && message.content.substring(0, 1) == '!') {

        var args = message.content.substring(1).split(' ');
        // var cmd = message.content.substr(0, message.content.indexOf(' '));
        var cmd = args[0];
        console.log('Cmd: ' + cmd);
        message.reply(pastas[cmd]);

    }
})