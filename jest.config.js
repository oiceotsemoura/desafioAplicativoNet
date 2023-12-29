module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  collectCoverageFrom: ['src/components/**/*.{js,jsx,ts,tsx}'],
  setupFiles: ['./__mocks__/react-navigation.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|react-redux|react-native|react-navigation|@react-navigation/.*)',
  ],
};
