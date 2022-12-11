module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/**/mock.ts',
    '!src/graphql/**',
    '!src/services/**',
    '!src/types/**',
    '!src/pages/_app.tsx',
    '!src/pages/_document.tsx',
    '!src/pages/index.tsx',
    '!src/components/**/templates/**',
    '!src/components/Analytics/**',
    '!src/components/Slider/**',
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
}
