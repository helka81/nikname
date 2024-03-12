import Validator from '../validator.js';

describe('Validator', () => {
    it('should return true for valid usernames', () => {
        expect(Validator.validateUsername('valid_username123')).toBe(true);
        expect(Validator.validateUsername('another-username')).toBe(true);
        expect(Validator.validateUsername('username_with_underscores')).toBe(true);
        expect(Validator.validateUsername('user-123')).toBe(true);
    });
});