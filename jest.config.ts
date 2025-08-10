const config = {
  verbose: true,
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  collectCoverageFrom: ["<rootDir>/src/app/**/*.ts"],
  // todo: remove if cypress is not used testPathIgnorePatterns: ["<rootDir>/cypress"],
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!(.pnpm/)?(@angular|@ngrx|@ngx-translate|color-(-space|parse|rgba|name)|quickselect|rbush|rxjs|ol))"
  ]
};

module.exports = config;

