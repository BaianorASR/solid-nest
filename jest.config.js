/** @type {import('jest').Config} */
const config = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
  moduleNameMapper: {
    '@app$': '<rootDir>',
    '@common/db(.*)$': '<rootDir>/common/database/$1',
    '@config$': '<rootDir>/config',
    '@dtos$': '<rootDir>/dtos',
    '@interfaces$': '<rootDir>/interfaces',
    '@exceptions$': '<rootDir>/exceptions',
    '@constants$': '<rootDir>/constants',
    '@decorators$': '<rootDir>/decorators',
    '@entities$': '<rootDir>/entities',
    '@modules$': '<rootDir>/modules',
    '@controllers$': '<rootDir>/controllers',
    '@repositories$': '<rootDir>/repositories',
    '@repositories/prisma$': '<rootDir>/repositories/prisma',
    '@use-cases$': '<rootDir>/use-cases',
  },
};

module.exports = config;
