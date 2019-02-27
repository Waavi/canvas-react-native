module.exports = {
	preset: 'react-native',
	testPathIgnorePatterns: ['<rootDir>/node_modules'],
	setupFiles: ['./jest-setup.js'],
	moduleFileExtensions: ['js', 'jsx', 'json'],
	testMatch: ['**/src/**/*.spec.(js|jsx|ts|tsx)'],
}
