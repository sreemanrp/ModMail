const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Get help or contact moderators'),

  async execute(interaction) {
    await interaction.reply({
      content: '📩 Please contact our moderators or DM me for moderator assistance.',
      ephemeral: true
    });
  }
};
