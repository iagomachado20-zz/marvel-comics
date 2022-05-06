module.exports = {
    roots: ['<rootDir>/src'],
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{ts,tsx}',
        '!<rootDir>/src/**/index.{ts,tsx}',
        '!<rootDir>/src/presentation/styles/*.{ts,js}',
        '!**/*.d.ts',
        '!<rootDir>/src/setupTests.ts',
        '!<rootDir>/src/reportWebVitals.ts',
    ],
    coverageDirectory: 'coverage',
    testEnviroment: 'jsdom',
    transform: {
        '.+\\.(ts|tsx)$': 'ts-jest'
    },
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|webp|svg|css|scss)$': 'identity-obj-proxy',
        "presentation/(.*)": "<rootDir>/src/presentation/$1",
    },
    testEnvironment: "jsdom"
}