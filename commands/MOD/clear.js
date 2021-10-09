const { MessageEmbed } = require('discord.js')
const Discord = require("discord.js")
module.exports = {
    name: "clear",
    aliases: ["c"],
    description: "czysczenie wiadomosci",
    async execute(client, message, args, discord) {
        const amount = args.join(" ");
 
        if(!amount) return message.reply(
          new Discord.MessageEmbed()
          .setColor('EB0027')
          .setTitle('<:nie:894622197405073409> ERROR!')
          .setDescription(`Podaj liczbę wiadomości do usunięcia!`)
          .addFields(
              { name: "Oto przykład: ", value: "\`\`\`css\n [ !c 14 ]\`\`\`" }
            )
          .setFooter(
           message.member.displayName,
           message.author.displayAvatarURL({ dynamic: true })
         )
         .setTimestamp()
        )
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(
          new Discord.MessageEmbed()
          .setColor('EB0027')
          .setTitle('<:nie:894622197405073409> ERROR!')
            .setDescription("Nie masz permisji do użycia tej komendy!\n **Potrzebne permisje:**\n \`\`\`css\n [ Zarządzanie wiadomościami ]\`\`\`")
            .setFooter(
                message.member.displayName,
                message.author.displayAvatarURL({ dynamic: true })
              )
              .setTimestamp()
             )
 
          if(amount > 100) return message.reply(
          new Discord.MessageEmbed()
          .setColor('EB0027')
          .setTitle('<:nie:894622197405073409> ERROR!')
          .setDescription("Nie możesz usunąć więcej wiadomości niż 100!")
          .setFooter(
            message.member.displayName,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp()
         )
 
          if(amount < 1) return message.reply(
              new Discord.MessageEmbed()
          .setColor('EB0027')
          .setTitle('<:nie:894622197405073409> ERROR!')
              .setDescription("Nie możesz usunąć mniej niż 1 wiadomość")
              .addFields(
                { name: "Oto przykład: ", value: "\`\`\`css\n [ !c 1 ]\`\`\`" }
              )
            .setFooter(
             message.member.displayName,
             message.author.displayAvatarURL({ dynamic: true })
           )
           .setTimestamp()
          )
 
          await message.channel.messages.fetch({limit: amount}).then(messages => {
              message.channel.bulkDelete(messages
      )});
 
 
      message.channel.send(
          new Discord.MessageEmbed()
          .setColor('#36393f')
          .setTitle('<:tak:894622197379915796> SUKCES!')
          .setDescription(`Usunąłeś **${amount}** wiadomości!`)
          .setFooter(
            message.member.displayName,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp()
         )
              }  
    }