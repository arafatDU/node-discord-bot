require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
    ] 
  });

client.on('messageCreate', (message) => {
  console.log(message.content);
  if (message.author.bot) return;

  message.reply({
    content: "Hello, I'm a bot!",
  })
});


client.login(process.env.BOT_LOGIN_TOKEN);