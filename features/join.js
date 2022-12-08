const { joinVoiceChannel } = require('@discordjs/voice');

function join(user, interaction) {
  const connection = joinVoiceChannel({
	  //channelId: interaction.user.voiceChannel.id,
	  channelId: 974058934933544975,
	  guildId: interaction.guild.id,
	  adapterCreator: interaction.guild.voiceAdapterCreator,
  });
}

module.exports = { join }
