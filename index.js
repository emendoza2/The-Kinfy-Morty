const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.on('message', msg => {
  if (msg.content === 'marco') {
    msg.reply('polo')
  }
});

client.on('message', msg => {
  if (msg.content === 'im tired') {
    msg.reply('Hi tired! Im Kinfy!')
  }
});

client.on('message', msg => {
  if (msg.content === 'Im hungry') {
    msg.reply('Hi there, hungry!  Im Kinfy!')
  }
});

client.on('message', msg => {
  if (msg.content === 'Kinfy start') {
    msg.reply('Congratulations, you recieved a Regular Morty!')
    msg.channel.send("https://vignette.wikia.nocookie.net/rickandmorty/images/6/69/PM-001.png/revision/latest?cb=20160904112641");
  }
});

client.login('NDk2NjM1NzgwNzQ4NTQxOTcy.DpUCPQ.DWIAA7A0_nYJj58PMj9Ak6zjAok');
