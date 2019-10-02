const yt = require("./downloaders/youtube.js");
const twitter = require("./downloaders/twitter.js");

module.exports = async function (url, fn) {
    if (url.includes("youtu.be/") || url.includes("youtube.com/watch?v=")) {
        return yt(url, fn);
    } else if (url.includes("twitter.com/")) {
        return twitter(url, fn);
    } else {
        throw new Error("No compatible downloaders found.");
    }
}