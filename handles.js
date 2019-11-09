const yt = require("./handles/youtube.js");
const twitter = require("./handles/twitter.js");
const reddit = require("./handles/reddit.js");

module.exports = async function (url) {
    if (url.includes("youtu.be/") || url.includes("youtube.com/watch?v=")) {
        return await yt(url);
    } else if (url.includes("twitter.com/")) {
        return await twitter(url);
    } else if (url.includes("reddit.com/")) {
        return await reddit(url);
    } else {
        throw new Error("No compatible downloaders found.");
    }
}