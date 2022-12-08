const { joinVoiceChannel } = require('@discordjs/voice');

function join(interaction, should_return = false) {
  console.log(interaction.member)
  const channel = interaction.member.voice.channel;
  const connection = joinVoiceChannel({
	  channelId: channel.id,
	  guildId: channel.guildId,
	  adapterCreator: channel.guild.voiceAdapterCreator,
  });
  if (should_return) return connection
}

module.exports = { join }
