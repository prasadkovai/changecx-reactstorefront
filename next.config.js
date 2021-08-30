const webpack = require('webpack')
const withReactStorefront = require('react-storefront/plugins/withReactStorefront')
require('dotenv').config()

module.exports = withReactStorefront({
    target: 'serverless',
    connector: 'changecx-commercetools-connector',
    webpack: config => {
        config.plugins.push(
            new webpack.optimize.LimitChunkCountPlugin({
                maxChunks: 1,
            })
        )
        return config
    },
})