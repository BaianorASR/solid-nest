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
    '@implementations$': '<rootDir>/repositories/implementations',
    '@use-cases$': '<rootDir>/use-cases',
  },
};

module.exports = config;
