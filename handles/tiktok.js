module.exports = async function (url) {
    return url.split("/")[3].slice(1);
};