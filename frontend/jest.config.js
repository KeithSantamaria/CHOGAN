module.exports ={
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
  },
  "roots": [
    "<rootDir>/src"
  ],
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  setupTestFrameworkScriptFile: "<rootDir>/src/setupTests.ts"
};