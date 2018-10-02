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

client.on('message', msg => {
  if (msg.content === 'K!start') {
    msg.reply('Welcome to your very own Kinfy Morty Adventure! You recieved a Regular Morty.')
    msg.reply('https://www.google.com.ph/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj19cqdiujdAhWGT7wKHTQFC44QjRx6BAgBEAU&url=https%3A%2F%2Fwww.gameskinny.com%2Fgbcaz%2Fpocket-mortys-the-absolute-best-and-most-powerful-mortys&psig=AOvVaw06aCJbwmlJs8UrpErgDAdj&ust=1538580784941813')
  }
});

client.login('NDk2NjM1NzgwNzQ4NTQxOTcy.DpUCPQ.DWIAA7A0_nYJj58PMj9Ak6zjAok');
