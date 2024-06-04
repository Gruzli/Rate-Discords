import { Message } from 'discord.js';
import avatarCommand from '../commands/avatar';
import playCommand from '../commands/play';

export default async (message: Message) => {
  if (message.author.bot) return;

  if (message.content.startsWith('!ping')) {
    message.channel.send('Pong!');
  }

  if (message.content.startsWith('!avatar')) {
    await avatarCommand(message);
  }

  if (message.content.startsWith('!play')) {
    await playCommand(message);
  }
};
