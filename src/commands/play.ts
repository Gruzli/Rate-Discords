// import { Message, VoiceChannel } from 'discord.js';
// import { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus } from '@discordjs/voice';
// import ytdl from 'ytdl-core';
// import ytdlExec from 'youtube-dl-exec';

// const play = async (message: Message) => {
//   const args = message.content.split(' ');

//   if (args.length < 2) {
//     message.channel.send('Please provide a YouTube or Spotify link.');
//     return;
//   }

//   const url = args[1];
//   const voiceChannel = message.member?.voice.channel as VoiceChannel;

//   if (!voiceChannel) {
//     message.channel.send('You need to be in a voice channel to play music!');
//     return;
//   }

//   const connection = joinVoiceChannel({
//     channelId: voiceChannel.id,
//     guildId: message.guild!.id,
//     adapterCreator: message.guild!.voiceAdapterCreator,
//   });

//   let stream;
//   if (url.includes('youtube.com') || url.includes('youtu.be')) {
//     stream = ytdl(url, { filter: 'audioonly' });
//   } else if (url.includes('spotify.com')) {
//     try {
//       const info = await ytdlExec(url, {
//         dumpSingleJson: true,
//         preferFreeFormats: true,
//         noCheckCertificates: true,
//         addHeader: [
//           'referer:youtube.com',
//           'user-agent:googlebot'
//         ]
//       });

//       const youtubeUrl = info.url || `https://www.youtube.com/watch?v=${info.id}`;
//       stream = ytdl(youtubeUrl, { filter: 'audioonly' });
//     } catch (error) {
//       message.channel.send('Error fetching video info. Please ensure the Spotify link is correct and try again.');
//       return;
//     }
//   } else {
//     message.channel.send('Please provide a valid YouTube or Spotify link.');
//     return;
//   }

//   const player = createAudioPlayer();
//   const resource = createAudioResource(stream);

//   player.play(resource);
//   connection.subscribe(player);

//   player.on(AudioPlayerStatus.Playing, () => {
//     console.log('The audio player has started playing!');
//   });

//   player.on(AudioPlayerStatus.Idle, () => {
//     connection.destroy();
//   });

//   message.channel.send(`Now playing: ${url}`);
// };

// export default play;
