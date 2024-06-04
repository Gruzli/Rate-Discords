import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
import ready from './events/ready';
import messageCreate from './events/messageCreate';

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates,
  ],
});

client.once('ready', ready);

client.on('messageCreate', messageCreate);

client.login(process.env.DISCORD_TOKEN).catch(error => {
  console.error('Failed to login:', error);
});
