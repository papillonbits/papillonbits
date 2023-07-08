export const coreJSVersion = '3.31.1'

export const targetBrowsers = {
  production: ['> 1%', 'last 2 versions', 'Firefox ESR'],
  legacyBrowsers: ['> 1%', 'last 2 versions', 'Firefox ESR'],
  modernBrowsers: [
    'last 2 Chrome versions',
    'not Chrome < 60',
    'last 2 Safari versions',
    'not Safari < 10.1',
    'last 2 iOS versions',
    'not iOS < 10.3',
    'last 2 Firefox versions',
    'not Firefox < 54',
    'last 2 Edge versions',
    'not Edge < 15',
  ],
}

export const manifestFileName = 'manifest.json'

export const indexHTMLName = 'index.html'

export const extensions = ['.js', '.jsx', '.json', '.scss']
