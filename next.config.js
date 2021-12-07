module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'styled-components': require.resolve('./node_modules/styled-components/dist/styled-components.esm.js'),
    }

    return config
  },
  experimental: {
    styledComponents: true,
    urlImports: ['https://jscdn.teleporthq.io']
  }
}
