const fs = require('fs');

module.exports = {
  config: {
    name: "prefix",
    version: "1.0",
    author: "lord king", // this cmd will expire if you change this credits (NEW VERSION)
    countDown: 5,
    role: 0,
    shortDescription: "",
    longDescription: "",
    category: "system",
  },
 
  onStart: async function() {},
 
  onChat: async function({ event, message, getLang, api }) {
   const link = [
"https://i.imgur.com/vMPjSBJ.jpeg",
]
  let img =
link[Math.floor(Math.random()*link.length)]
    if (event.body) {
      const word = event.body.toLowerCase();
      switch (word) {
        case "prefix":
          const replies = [
            "╭━──━─≪✠≫─━──━╮\n🤍𝑃𝑅𝐸𝐹𝐼𝑋🌪🤍\n            🩺✨-✨🩺\n╰━──━─≪✠≫─━──━╯\n════•『🎗』•════\n🍂✨𝑀𝑌 𝐶𝑅𝐸𝐴𝑇𝑂𝑅𝑆✨🍂\n════•『🎗』•════\n╭━──━─≪✠≫─━──━╮\n𝗔𝗟𝗔𝗠𝗜𝗡 & 𝗡𝗰𝘀 𝗣𝗿𝗼\n╰━──━─≪✠≫─━──━╯",
          ];
          api.setMessageReaction("🥀", event.messageID, event.messageID, api); 
          const randomIndex = Math.floor(Math.random() * replies.length);
          message.reply({
            body: replies[randomIndex],
attachment: await global.utils.getStreamFromURL(img)})
          break;
        default:
          return; 
      }
    }
  },
};
