module.exports = {
  collectCoverage: true,
  coverageReporters: ['lcov'],
  collectCoverageFrom: ['src/**/*.js'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['__tests__/test-helpers'],
  // testMatch: ['**/__tests__/task-status-crud-tests.js'],
};
