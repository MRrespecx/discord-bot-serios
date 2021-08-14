const { Client, Intents } = require('discord.js');
const botConfig = require("./botconfig.json");

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]}); 
client.login(botConfig.token);
 
client.on("ready", async () => {
 
    console.log(`${client.user.username} is online.`);

    client.user.setActivity("twitch.tv/MaritAapje", { type: "WATCHING" });
 
});

client.on("message", async message => {
 
    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];
 
    if (command === `${prefix}twitch`) {
 
        return message.channel.send("twitch.tv/MaritAapje");

    
    }

    if (command === `${prefix}thomas`) 
 
        return message.channel.send("@MRrespecx word gebant");

        if (command === `${prefix}marit`) 
 
        return message.channel.send("the jungle leader");

        
 
 
});
bot.login(process.env.token);