const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('send')
    .setDescription('Send a DM to a user from the bot')
    .addUserOption(opt => opt.setName('user').setDescription('User to DM').setRequired(true))
    .addStringOption(opt => opt.setName('message').setDescription('Message content').setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),

  async execute(interaction) {
    const user = interaction.options.getUser('user');
    const message = interaction.options.getString('message');

    try {
      await user.send(`📩 Message from the staff:\n\n${message}`);
      await interaction.reply({ content: '✅ Message sent to user.', ephemeral: true });
    } catch (err) {
      await interaction.reply({ content: '❌ Could not DM that user.', ephemeral: true });
    }
  }
};