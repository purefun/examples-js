/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  projects: [
    {
      displayName: 'env1',
      preset: 'ts-jest',
      testEnvironment: 'node',
      roots: ['<rootDir>/test/env1'],
      setupFiles: ['<rootDir>/jest-env1.setup.js'],
    },
    {
      displayName: 'env2',
      preset: 'ts-jest',
      testEnvironment: 'node',
      roots: ['<rootDir>/test/env2'],
      setupFiles: ['<rootDir>/jest-env2.setup.js'],
    },
  ],
}
