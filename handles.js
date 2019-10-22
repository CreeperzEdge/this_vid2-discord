const yt = require("./handles/youtube.js");
const twitter = require("./handles/twitter.js");
const reddit = require("./handles/reddit.js");

module.exports = async function (url) {
    if (url.includes("youtu.be/") || url.includes("youtube.com/watch?v=")) {
        console.log(await yt(url));
        return await yt(url);
    } else if (url.includes("twitter.com/")) {
        console.log(await twitter(url));
        return await twitter(url);
    } else if (url.includes("reddit.com/")) {
        console.log(await reddit(url));
        return await reddit(url);
    } else {
        throw new Error("No compatible downloaders found.");
    }
}