/** @type {import('next').NextConfig} */
const config = {
  test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
  loader: 'file-loader',
  query: {
    name: '[name].[ext]',
    outputPath: 'static/img/',
    publicPath: '/dist/static/img/'
  }
}

const webpack = config => {
  // Perform customizations to webpack config
  // Important: return the modified config

  return config
}

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    // Perform customizations to webpack config
    // Important: return the modified config
    // console.log(config)
    return config
  },
}

module.exports = nextConfig
