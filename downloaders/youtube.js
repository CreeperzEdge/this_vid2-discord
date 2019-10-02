const ytdl = require("ytdl-core");
const fs = require("fs-extra");

module.exports = function (url, fn) {
    return new Promise((resolve, reject) => {
        ytdl(url, {filter: (format) => format.container === 'mp4'})
        .pipe(fs.createWriteStream(fn)).on("close", () => resolve(fn));
    })
};