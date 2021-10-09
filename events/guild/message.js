module.exports = (client, message, args) =>{
    const { prefix } = require('../../config.json');

    if(!message.content.startsWith(prefix) || message.author.bot) return;
    

    try {
        if(command) command.execute(message, args, Discord, client);
    } catch (err) {
        message.channel.send("Wystąpił błąd.")
    }
    message.channel.send(embed);
}