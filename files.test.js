const fs = require('fs');
const { readFile } = require('./files');

// Mock fs module
jest.mock('fs');

describe('File Operations', () => {
    // Reset mocks before each test
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('readFile', () => {
        test('should read file contents successfully', () => {
            // Arrange
            const mockContent = 'test file content';
            const testPath = './test.txt';
            fs.readFileSync.mockReturnValue(mockContent);

            // Act
            const result = readFile(testPath);

            // Assert
            expect(result).toBe(mockContent);
            expect(fs.readFileSync).toHaveBeenCalledWith(testPath, 'utf8');
            expect(fs.readFileSync).toHaveBeenCalledTimes(1);
        });

        test('should handle file read errors', () => {
            // Arrange
            const testPath = './nonexistent.txt';
            const errorMessage = 'ENOENT: no such file or directory';
            fs.readFileSync.mockImplementation(() => {
                throw new Error(errorMessage);
            });

            // Act & Assert
            expect(() => readFile(testPath)).toThrow(errorMessage);
            expect(fs.readFileSync).toHaveBeenCalledWith(testPath, 'utf8');
            expect(fs.readFileSync).toHaveBeenCalledTimes(1);
        });

        test('should handle empty files', () => {
            // Arrange
            const testPath = './empty.txt';
            fs.readFileSync.mockReturnValue('');

            // Act
            const result = readFile(testPath);

            // Assert
            expect(result).toBe('');
            expect(fs.readFileSync).toHaveBeenCalledWith(testPath, 'utf8');
            expect(fs.readFileSync).toHaveBeenCalledTimes(1);
        });
    });
}); 