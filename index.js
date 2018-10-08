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
  if (msg.content === "im tired") {
    msg.reply("Hi tired! I'm Kinfy!")
  }
});

client.on('message', msg => {
  if (msg.content === "Im tired") {
    msg.reply("Hi tired! I'm Kinfy!")
  }
});

client.on('message', msg => {
  if (msg.content === "I'm tired') {
    msg.reply("Hi tired! I'm Kinfy!")
  }
});

client.on('message', msg => {
  if (msg.content === "Im hungry") {
    msg.reply("Hi there, hungry!  I'm Kinfy!")
  }
});

client.on('message', msg => {
  if (msg.content === "im hungry") {
    msg.reply("Hi there, hungry!  I'm Kinfy!")
  }
});

client.on('message', msg => {
  if (msg.content === "I'm hungry") {
    msg.reply("Hi there, hungry!  Im Kinfy!")
  }
});

client.on('message', msg => {
  if (msg.content === 'Kinfy start') {
    msg.reply('Congratulations, you recieved a Regular Morty!')
    var MortyRegularMorty = new Discord.Attachment('PM-001.png');
    msg.channel.send(MortyRegularMorty);
  }
});

client.login('NDk2NjM1NzgwNzQ4NTQxOTcy.DpUCPQ.DWIAA7A0_nYJj58PMj9Ak6zjAok');
