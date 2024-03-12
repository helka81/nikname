export default class Validator {
    static validateUsername(username) {

      const pattern = /^[a-zA-Z][a-zA-Z0-9_-]*[a-zA-Z0-9]$/; 
      return !/[0-9]{4,}/.test(username) && pattern.test(username); 
    }
}



