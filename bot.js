const { Client, GatewayIntentBits, Collection, ActivityType } = require('discord.js');
const fs = require('fs');
require('dotenv').config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages
  ]
});

client.commands = new Collection();
client.modals = new Collection();

client.adminRoleId = process.env.ADMIN_ROLE_ID;
client.ownerRoleId = process.env.OWNER_ROLE_ID;
client.modRoleId = process.env.MOD_ROLE_ID;
client.logsChannelId = process.env.LOGS_CHANNEL_ID;

client.token = process.env.TOKEN;
client.clientId = process.env.CLIENT_ID;
client.guildId = process.env.GUILD_ID;

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
}

client.modals.set('insult_form', require('./modals/insultModal'));

require('./events/interactionCreate')(client);
require('./events/ready')(client);

client.on('ready', () => {
  client.user.setPresence({
    activities: [{ name: 'You ❤️', type: ActivityType.Listening }],
    status: 'online'
  });
});

client.login(process.env.TOKEN);