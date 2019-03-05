module.exports = {
	preset: 'react-native',
	testPathIgnorePatterns: ['<rootDir>/node_modules'],
	// setupFiles: ['./jest-setup.js'],
	setupFilesAfterEnv: ['./jest-setup.js'],
	moduleFileExtensions: ['js', 'jsx', 'json'],
	testMatch: ['**/src/**/*.spec.(js|jsx|ts|tsx)'],
	snapshotSerializers: ['enzyme-to-json/serializer'],
}
