const ytdl = require("ytdl-core");

module.exports = async function (url) {
    return new Promise((resolve, reject) => {
        ytdl.getBasicInfo(url, (err, info) => {
            if (err) reject(err);
            resolve(info.author.name.replace(/[\\$'"]/g, "\$&"));
        });
    })
};