module.exports = (client) => {
    client.on('interactionCreate', async interaction => {
      if (interaction.isChatInputCommand()) {
        const command = client.commands.get(interaction.commandName);
        if (!command) return;
  
        try {
          await command.execute(interaction, client);
        } catch (error) {
          console.error(error);
          await interaction.reply({ content: 'There was an error executing this command.', ephemeral: true });
        }
      } else if (interaction.isModalSubmit()) {
        const modal = client.modals.get(interaction.customId);
        if (!modal) return;
  
        try {
          await modal(interaction, client);
        } catch (error) {
          console.error(error);
          await interaction.reply({ content: 'There was an error handling this modal.', ephemeral: true });
        }
      }
    });
  };  