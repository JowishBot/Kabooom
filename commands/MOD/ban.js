const {MessageEmbed} = require('discord.js')
module.exports = {
    name: 'ban',
    description: 'banuje osoby',
    execute: (client, message, args, discord) => {
        let member = message.mentions.users.first();
        if (!message.member.hasPermission("BAN_MEMBERS")) {
          let perm_embed = new MessageEmbed()
          .setColor('EB0027')
          .setTitle('<:nie:896114138437255280> ERROR!')
          .setDescription (`Nie masz permisji do użycia tej komendy!\n **Potrzebne permisje:**\n \`\`\`css\n [ Banowanie członków ]\`\`\``)
          .setFooter(
            message.member.displayName,
            message.author.displayAvatarURL({ dynamic: true })
          )
        .setTimestamp()

          message.channel.send(perm_embed)
        return;
        }
        const reason = args.slice(1).join(' ');
        if (!reason) {
            const embed = new MessageEmbed()    
            .setColor('EB0027')
            .setTitle('<:nie:896114138437255280> ERROR!')
            .setDescription(`Nie podałeś powodu!`)
            .addFields(
                { name: "Oto przykład: ", value: "\`\`\`css\n [ !ban @GGod Obraza ]\`\`\`" }
              )
            .setFooter(
             message.member.displayName,
             message.author.displayAvatarURL({ dynamic: true })
           )
           .setTimestamp()
            message.channel.send(embed);           
            return;
        }

        

        const embed2 = new MessageEmbed()    
        .setColor('#36393f')
        .setTitle('<:tak:896114138504372225> SUKCES!')
        .setDescription(`Osoba o nicku <@${member.id}> została zbanowana!\n**Powód bana:**\`\`\`css\n [ ${reason} ]\`\`\` `)
        .setFooter(
         message.member.displayName,
         message.author.displayAvatarURL({ dynamic: true })
       )
       .setTimestamp()
        message.channel.send(embed2); 

        if (member) {
            const embed = new MessageEmbed()  
       .setColor('EB0027')
       .setTitle('<:nie:896114138437255280> ERROR!!')
       .setDescription ('Nie oznaczono osoby!')
       .addFields(
           { name: "Oto przykład: ", value: "\`\`\`css\n [ !ban @!Mystic ]\`\`\`" }
         )
       .setFooter(
           message.member.displayName,
           message.author.displayAvatarURL({ dynamic: true })
         )
       .setTimestamp()
       message.channel.send(embed3);
       return;
        }
    }
}