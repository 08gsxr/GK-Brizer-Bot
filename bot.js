const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === prefix + 'gk') {
    msg.reply('FU!');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'fu') {
    msg.reply('FU 2!');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'gk1') {
    msg.reply('Perk Up KNUCKLEHEAD');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'gk2') {
    msg.reply('Yur a dope!');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'gk3') {
    msg.reply('Shut up ya dope!');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'gk4') {
    msg.reply('Eat me Im a hoagie!');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'gk5') {
    msg.reply('Prospice');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'gk6') {
    msg.reply('You cant make dishes up');
  }
});

// THIS MUST BE THIS WAY
client.login( process.env.BOT_TOKEN);
