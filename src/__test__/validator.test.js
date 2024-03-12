import Validator from '../validator.js';

describe('Validator', () => {
    describe('validateUsername', () => {
        const testData = [
            ["user_name123", true],
            ["user1234", false],
            ["1username", false],
            ["username1", false],
            ["user$name", false],
            ["user_123", true],
            ["user-123", true],
            ["user", true]
        ];

        testData.forEach(([input, expected]) => {
            it(`should return ${expected} for username '${input}'`, () => {
                expect(Validator.validateUsername(input)).toBe(expected);
            });
        });
    });
});

