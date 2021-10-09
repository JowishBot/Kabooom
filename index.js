const {Collection, Client, Discord, MessageEmbed } = require('discord.js')
const fs = require('fs')

const client = new Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

client.on('message', message => {
    if (message.content === "<@!894618802942255176>") {
      const embed = new MessageEmbed()
        .setTitle(`123`)
        .setDescription(`123`)
        .setFooter(
            message.member.displayName,
            message.author.displayAvatarURL({ dynamic: true })
          )
        .setTimestamp()
        .setColor(`#36393f`)
      message.channel.send(embed)
    }
  });

client.on('ready', () => {
    client.user.setActivity(`ping: ${client.ws.ping}`)
    console.log(`${client.user.username} ✅`)
})
    client.on("guildMemberAdd", (member) => {
        let channel = member.guild.channels.cache.get("896115069266571304")
        let embed = new MessageEmbed()
        .setTitle(`Witamy w Kaboom | Support`)
        .setColor(`#36393f`)
        .setDescription(`Cześć <@${member.id}>\n\nWitamy Cię na serwerze discord **Kaboom | Support**
        Mamy nadzieje, że zostaniesz z nami na dłużej`)
        .setFooter(
            member.displayName,
            member.user.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        channel.send(embed)
    });

    const channel = '896110759573073954'
    const memberRole = '896113569605767179'
    const verifyEmoji = '✅'
    
    client.on('messageReactionAdd', async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;

      if(reaction.message.channel.id == channel) {
          if(reaction.emoji.name === verifyEmoji) {
              await reaction.message.guild.members.cache.get(user.id).roles.add(memberRole);
          }
      } else {
          return;
      }
  });

  client.on('messageReactionRemove', async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;

      if(reaction.message.channel.id == channel) {
          if(reaction.emoji.name === verifyEmoji) {
              await reaction.message.guild.members.cache.get(user.id).roles.remove(memberRole);
          }
      } else {
          return;
      }
  });

const disbut = require('discord-buttons');
disbut(client);
const config = require('./config.json')
const message = require('./events/guild/message')
const prefix = config.prefix
const token = config.token
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on('message', async message =>{
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.execute(client, message, args) 
})
client.login(token)