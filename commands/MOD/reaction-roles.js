const {MessageEmbed} = require('discord.js')
module.exports = {
    name: 'verify',
    description: 'weryfikacja hehe',
    async execute(client, message, args, discord) {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Nie masz roli!')

        const verifyEmoji = '✅'
        
        let embed = new MessageEmbed()
        .setColor('#36393f')
        .setTitle('WITAMY W KABOOM | SUPPORT `👋`')
        .setDescription('> __ZAREAGUJ, ABY SIĘ ZWERYFIKOWAĆ!__')
        .setFooter(' © Kaboom | Support | WELCOME!')

        let messageEmbed = await message.channel.send(embed)
        messageEmbed.react(verifyEmoji)
    }
}