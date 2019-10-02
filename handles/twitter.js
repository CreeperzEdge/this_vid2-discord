const fetch = require("node-fetch");

module.exports = async function (url) {
    return new Promise((resolve, reject) => {
        fetch(`https://publish.twitter.com/oembed?url=${url}`)
        .then((res) => res.json())
        .then((res) => resolve(res.author_url.split("/")[3]));        
    })
};