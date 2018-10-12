const Discord = require('discord.js');
const winston = require('winston');
const responses = require('./responses.json');
const client = new Discord.Client();

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        //
        // - Write to all logs with level `info` and below to `combined.log`
        // - Write all logs error (and below) to `error.log`.
        //
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
logger.info(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (client.user.discriminator == msg.author.discriminator) return;
    for (trigger in responses.responses) {
        if (new RegExp(trigger, "i").test(msg.content)) {
            let say = responses.responses[trigger];
            if (typeof say == "array") {
                say = say[Math.floor(Math.random()*say.length)];
            }
            msg.reply(say);
            console.log(say);
        }
    }
})

/*
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
    if (msg.content === "I'm tired") {
        msg.reply("Hi tired! I'm Kinfy!")
    }
});

client.on('message', msg => {
    if (msg.content === "I'm tired") {
        msg.reply("Hi tired! I'm Kinfy!")
    }
});

client.on('message', msg => {
    if (msg.content === "Im hungry") {
        msg.reply("Hi there, hungry!  I'm Kinfy!")
    }
});

client.on('message', msg => {
    if (msg.content === 'im hungry') {
        msg.reply("Hi there, hungry! I'm Kinfy!")
    }
});

client.on('message', msg => {
    if (msg.content === "I'm hungry") {
        msg.reply("Hi there, hungry!  I'm Kinfy!")
    }
});

client.on('message', msg => {
    if (msg.content === 'Kinfy start') {
        msg.reply('Congratulations, you recieved a Regular Morty!')
        var MortyRegularMorty = new Discord.Attachment('PM-001.png');
        msg.channel.send(MortyRegularMorty);
    }
});
//*/

client.login('NDk2NjM1NzgwNzQ4NTQxOTcy.DpUCPQ.DWIAA7A0_nYJj58PMj9Ak6zjAok');
