// This is a custom error class that represents a "Not Found" error. 
// It extends the built-in Error class and adds a status property with a default value of 404.
class NotFoundError {
  constructor(message) {
    // Call the parent constructor to set the message property
    super(message);
    // Set the status property to 404
    this.status = 404;
  }
}

// This is another custom error class that represents a "Not Authenticated" error.
// It also extends the built-in Error class and adds a status property with a default value of 401.
class NotAuthError {
  constructor(message) {
    // Call the parent constructor to set the message property
    super(message);
    // Set the status property to 401
    this.status = 401;
  }
}

// Export the NotFoundError and NotAuthError classes so that they can be used in other files
exports.NotFoundError = NotFoundError;
exports.NotAuthError = NotAuthError;
