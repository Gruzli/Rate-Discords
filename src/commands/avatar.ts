import { Message, EmbedBuilder } from 'discord.js';

export default async (message: Message) => {
  const user = message.mentions.users.first() || message.author;

  const avatarEmbed = new EmbedBuilder()
    .setTitle(`${user.username}'s Avatar`)
    .setImage(user.displayAvatarURL({ extension: 'png', size: 1024 }))
    .setColor('#0099ff');

  await message.channel.send({ embeds: [avatarEmbed] });
};
