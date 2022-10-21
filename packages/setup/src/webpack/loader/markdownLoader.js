// https://github.com/webpack-contrib/html-loader
// https://github.com/peerigon/markdown-loader

export function getMarkdownLoaderStandardSetup() {
  return {
    test: /\.md$/,
    use: [
      {
        loader: 'html-loader',
      },
      {
        loader: 'markdown-loader',
        options: {},
      },
    ],
  }
}
