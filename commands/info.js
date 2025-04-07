const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

const rulesMarkdown = `> 💠 **Welcome to Rythm!**  
> Rythm is your go-to music streaming platform with support for listening with friends. Use Rythm as a:  
> ↪️ 🎮 **Discord Activity** in any voice chat, text chat, or Group/Single DM  
> ↪️ 📱 Mobile app on [iOS](https://apps.apple.com) or [Android](https://play.google.com) for music on the go  
> ↪️ ✏️ Or slash command as a remote control for the activity (Try out \`/start\`!)  
>  
> 🧑‍🤝‍🧑 Need help with Araska? Check out our [FAQ](https://faq.araska.com) or come chat with us in <#support>!  
> ─────────────────────────────\n\n### 🔬 Experimental Features\n- 🌀\nTry out \`/help\` or \`!help\` in <#bot-commands>!\n### 📏 Community Rules\n- Follow Discord’s [terms of service](https://discord.com/terms) & [community guidelines](https://discord.com/guidelines)\n- Don’t discriminate, advertise, or spam. Please use common sense.\n- We allow mild self-promotion from music artists as long as they are done in good faith. Don’t use our server only to advertise & don’t post only links!\n\n─────────────────────────────\n\n### 📢 Our Socials\n**X** ([@Twitter](https://twitter.com))`;

module.exports = {
  data: new SlashCommandBuilder()
    .setName('rules')
    .setDescription('Post server rules')
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),

  async execute(interaction) {
    await interaction.channel.send(rulesMarkdown);
    await interaction.reply({ content: '📜 Rules have been posted!', ephemeral: true });
  }
};