const { MessageEmbed } = require('discord.js')
const Discord = require("discord.js")
module.exports = {
    name: "poll",
    aliases: ["p"],
    description: "ankieta",
    execute: (client, message, args, discord) => {


        if(message.content.includes('@everyone') || message.content.includes('here')) return;

        const channel = message.guild.channels.cache.get('896115628094660658');

        const suggestion = args.join(' ');
        if(!suggestion) return message.channel.send(new MessageEmbed()
        .setTitle("<:nie:896114138437255280> ERROR!")
        .setColor("EB0027")
        .setDescription ('Nie podałeś treści ankiety!')
        .addFields(
            { name: "Oto przykład: ", value: "\`\`\`css\n [ !ankieta Dodać nową komendę ]\`\`\`" }
          )
        .setFooter(
            message.member.displayName,
            message.author.displayAvatarURL({ dynamic: true })
          )
        .setTimestamp())

        let embed2 = new MessageEmbed()
        .setTitle('<:tak:896114138504372225> SUKCES!')
        .setColor('#36393f')
        .setDescription ('Ankieta została wysłana!')
        .setFooter(
            message.member.displayName,
            message.author.displayAvatarURL({ dynamic: true })
          )
        .setTimestamp()
       message.channel.send(embed2)
       const embed = new MessageEmbed()
        .setColor('#36393f')
        .setTitle('`📋` Ankieta')
        .setDescription (`\`\`\`css\n [ ${suggestion} ]\`\`\``)
        .setFooter(
            message.member.displayName,
            message.author.displayAvatarURL({ dynamic: true })
          )
        .setTimestamp()
        
        
                channel.send(embed).then(m =>{
                    m.react('<:tak:896114138504372225>');
                    m.react('<:nie:896114138437255280>');
                })            
    }
}
