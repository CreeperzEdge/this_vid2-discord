const util = require("util");
const exec = util.promisify(require("child_process").exec);
const fs = require("fs-extra");

module.exports = function (url, fn) {
    return exec(`youtube-dl ${url} --output ${fn}`);
};