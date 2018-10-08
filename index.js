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
    const embed = new Discord.RichEmbed()
  .setTitle("This is your title, it can hold 256 characters")
  .setAuthor("Regular Morty Morty")
  .setColor(0x00AE86)
  .setDescription("This is your Morty. Don't lose him!")
  .setFooter("This is the Morty that everybody gets when they start out with The Kinfy Morty.")
  .setImage("http://rickandmorty.wikia.com/wiki/Morty_(Pocket_Mortys)?file=PM-001.png")
  .setThumbnail("http://rickandmorty.wikia.com/wiki/Morty_(Pocket_Mortys)?file=PM-001.png")
  .setTimestamp()
  .setURL("http://rickandmorty.wikia.com/wiki/Morty_(Pocket_Mortys)?file=PM-001.png")
  .addField("Regular Morty Morty",
    "Everyone's first Morty! Your first best friend. Don't lose him!")
  message.channel.send({embed});
    }
});

client.login('NDk2NjM1NzgwNzQ4NTQxOTcy.DpUCPQ.DWIAA7A0_nYJj58PMj9Ak6zjAok');
