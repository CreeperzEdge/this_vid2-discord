const fetch = require("node-fetch");

module.exports = async function (url) {
    return new Promise((resolve, reject) => {
        fetch(`${url}.json`)
        .then((res) => res.json())
        .then((res) => resolve(res[0].data.children[0].data.author));
    });
};