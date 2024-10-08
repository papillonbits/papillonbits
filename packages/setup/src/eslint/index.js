module.exports = {
  env: {
    amd: true,
    browser: true,
    commonjs: true,
    es2020: true,
    jasmine: true,
    jest: true,
    mocha: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'prettier',
  ],
  globals: {
    document: false,
    expect: false,
    jest: false,
    jsdom: true,
    renderMount: false,
    renderShallow: false,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'jest', 'prettier'],
  rules: {
    'comma-dangle': 2,
    'import/named': 2,
    'import/no-extraneous-dependencies': [
      0,
      {
        devDependencies: ['**/*.test.js', '**/*.story.js'],
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-relative-packages': 'off',
    'jsx-a11y/accessible-emoji': 0,
    'object-curly-spacing': 2,
    'prettier/prettier': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-boolean-value': 0,
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-fragments': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    semi: ['error', 'never'],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@papillonbits/components', '@papillonbits/components/build']],
        extensions: ['.js'],
      },
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
    react: {
      version: '18.3.1',
    },
  },
}
