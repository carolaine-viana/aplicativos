module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    'react-native-geolocation-service': '<rootDir>/src/mocks/libs/geolocation-service.mock.js',
    '@react-native-community/async-storage': '<rootDir>/src/mocks/libs/async-storage.mock.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-vector-icons|react-native-maps|@react-navigation|@react-native-community/datetimepicker)/)',
  ],
  modulePathIgnorePatterns: ['.e2e.js', '.mock.js'],
  coveragePathIgnorePatterns: ['mocks', 'constants', 'type'],
};
