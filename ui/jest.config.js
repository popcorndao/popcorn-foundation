module.exports = {
  rootDir: process.cwd(),
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'png', 'md', 'html'],
  verbose: true,
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '.(?:skip).', '<rootDir>/coverage'],
  modulePaths: ['.'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
      babelConfig: {
        comments: false,
        presets: ["@babel/preset-react"]
        //plugins: ['@babel/plugin-transform-for-of']
      }
    }
  },
  transform: {
    '\\.[jt]sx?$': [
      'babel-jest'
    ],
    '^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx'
  },
  collectCoverage: true,
  coveragePathIgnorePatterns: ['node_modules', 'out', '.next', '.storybook', '.stories.tsx','.stories.mdx'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy'
  }
}