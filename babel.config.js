const presets = [
  [
    '@babel/env',
    {
      modules: false,
      targets: {
        browsers: '> 0.25%, ie 11, not op_mini all, not dead',
        node: 8
      }
    }
  ],
  '@babel/react'
]
module.exports = {
  presets,
  env: {
    test: {
      presets: ['@babel/env', '@babel/react']
    }
  }
}
