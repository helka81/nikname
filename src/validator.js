export default class Validator {
    static validateUsername(username) {
        const pattern1 = /^[a-zA-Z0-9_-]+$/;
        const rule1 = pattern1.test(username);

        const pattern2 = /[0-9]{4,}/;
        const rule2 = !pattern2.test(username);

        const pattern3 = /^[a-zA-Z][a-zA-Z0-9_-]*[a-zA-Z0-9]$/;
        const rule3 = pattern3.test(username);

        return rule1 && rule2 && rule3;
    }
}