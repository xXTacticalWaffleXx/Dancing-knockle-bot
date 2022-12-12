const { SlashCommandBuilder } = require('discord.js');
const { join } = require("../utils/join");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('join')
		.setDescription('joins the users voice channel'),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		join(interaction.user, interaction)
		await interaction.reply('joining hoe tornado');
	},
};

