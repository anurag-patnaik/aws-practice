const nodeExternals = require('webpack-node-externals');

module.exports = {
    externalsPresets: { node: true },
    externals: [nodeExternals()]
}