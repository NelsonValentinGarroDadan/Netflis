const path = require('path');
module.exports = {
    entry: "./scripts/index.js",
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js"
    },
};