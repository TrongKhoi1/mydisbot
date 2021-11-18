const Discord = require("discord.js");
const OWNER_ID = require("../../config.json").OWNER_ID;


module.exports = {
  name: "serverlist",
  description: "Xem danh sách sv có bot!",
  botPerms: ["USE_EXTERNAL_EMOJIS"],
  run: async (client, message, args) => {
    try {
      if (message.author.id != OWNER_ID)
        return message.channel.send(
          `<a:_cross:725303285015117844> Mày cút! <a:_cross:725303285015117844>`
        );
      let data = [];
      client.guilds.cache.forEach((x) => {
        message.channel.send(
          `🔹 **${x.name}** | \`${x.memberCount}\` members (ID: ${x.id})\n<a:ba:910796297160777788> <a:ba:910796297160777788> <a:ba:910796297160777788> <a:ba:910796297160777788> <a:ba:910796297160777788> <a:ba:910796297160777788> <a:ba:910796297160777788> <a:ba:910796297160777788> <a:ba:910796297160777788> <a:ba:910796297160777788>`,
        );
      });

      if (data.length > 0) {
        data.sort();
        data = `🔹 ` + data.join("\n🔹");
      } else {
        data = "[No server found]";
      }
    } catch (err) {
      const errorlogs = client.channels.cache.get(ERROR_LOGS_CHANNEL);

      message.channel.send(
        `Whoops, We got a error right now! This error has been reported to Support center!`
      );

      errorlogs.send(`Error on bs commands!\n\nError:\n\n ${err}`);
    }
  },
};