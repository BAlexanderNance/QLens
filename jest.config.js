const {defaults} = require('jest-config');

module.exports = {
    verbose: true,
    // preset: 'ts-jest',
    // transform: {
    //   '^.+\\.tsx?$': 'babel-jest',
    // },
    moduleNameMapper: {
      "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules"
    }
};

// module.exports = {
//     verbose: true,
//     runner: "@jest-runner/electron",
//     testEnvironment: "@jest-runner/electron/environment",
//     moduleNameMapper: {
//       // "collectCoverage": true,
//       electron: "<rootDir>/__mocks__/electronMock.js",
//       "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMocks.js",
//       "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/__mocks__/fileMock.js",
//     },
//     resolver: null,};