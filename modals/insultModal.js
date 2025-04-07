// modals/insultModal.js
module.exports = async (interaction, client) => {
    const insult = interaction.fields.getTextInputValue('insult');
  
    const logChannel = await client.channels.fetch(client.logsChannelId);
    if (logChannel) {
      logChannel.send(`⚠️ <@${interaction.user.id}> said to the bot: **${insult}**`);
    }
  
    await interaction.reply({ content: 'Your message has been logged. Please be respectful next time.', ephemeral: true });
  };  