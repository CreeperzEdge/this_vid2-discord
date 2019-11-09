const config = require("./config.json");
const generateVideo = require("./generateVideo.js");
const fs = require("fs-extra");
const ytdl = require('ytdl-core');
const Discord = require("discord.js");
const handles = require("./handles.js");
const downloaders = require("./downloaders.js");

const messages = [
  "Downloaded!",
  "Here's your video!",
  "TAke a look, y'all:",
  "Check it out:",
  "Done!",
  "Download complete!",
  "Uploaded!",
  "Sorted. 👍",
  "I got it!",
  `Your video has been downloaded!`,
  "Finished!"
];

const client = new Discord.Client();
client.login(config.discordToken);

client.on("message", async (msg) => {
  if (msg.mentions.members.get(client.user.id)) {
      const randomFilename = Math.random().toString(36).substring(2, 15);
      const fileName = `./cache/${msg.author.username}-${randomFilename}.mp4`;
      const url = msg.content.split(' ')[1];
      if (!url) return;
      console.log(`Downloading ${url}... (Requested by ${msg.author.tag})`);
      const userName = await handles(url);
      downloaders(url, fileName).then(async () => {
        const outputPath = await generateVideo(fileName, userName); 
        await msg.reply(messages[Math.floor(Math.random() * messages.length)], {files: [{
          attachment: outputPath,
          name: 'video.mp4'
        }]
      });
      await fs.remove(fileName);
      await fs.remove(outputPath);
      console.log("Done!\n");
      });
    }
});

client.on("ready", () => console.log("Connected to Discord."));