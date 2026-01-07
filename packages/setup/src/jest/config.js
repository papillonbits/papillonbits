const transformIgnorePackages = ['@exodus', 'jsdom/node_modules/parse5', 'parse5', 'uuid'].join('|')

export const transformIgnorePatterns = [`node_modules/(?!((@)?${transformIgnorePackages})/)`]

export function getJestSetup({ testPathIgnorePatterns, coverageDirectory, collectCoverage, collectCoverageFrom, coverageThreshold }) {
  return {
    testMatch: ['**/?(*.)test.js?(x)'],
    testPathIgnorePatterns,
    roots: ['<rootDir>'],
    transform: { '^.+\\.(js|jsx)$': 'babel-jest' },
    coverageDirectory,
    collectCoverage,
    coverageReporters: ['lcov', 'text'],
    collectCoverageFrom,
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|md)$': '<rootDir>/.mock/file.js',
      '^.+\\.(css|less|scss|md)$': 'identity-obj-proxy',
    },
    // https://jestjs.io/docs/tutorial-react-native#transformignorepatterns-customization
    transformIgnorePatterns,
    moduleFileExtensions: ['js', 'jsx'],
    coverageThreshold,
  }
}
