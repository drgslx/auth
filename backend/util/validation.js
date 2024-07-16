/**
 * Checks if the given value is a valid text.
 * @param {string} value - The value to be checked.
 * @param {number} [minLength=1] - The minimum length of the text.
 * @returns {boolean} - True if the value is a valid text, false otherwise.
 */
function isValidText(value, minLength = 1) {
  // Check if the value is not empty and its trimmed length is greater than or equal to the minimum length.
  return value && value.trim().length >= minLength;
}

/**
 * Checks if the given value is a valid date.
 * @param {string} value - The value to be checked.
 * @returns {boolean} - True if the value is a valid date, false otherwise.
 */
function isValidDate(value) {
  // Create a new Date object from the value.
  const date = new Date(value);
  // Check if the value is not empty and the date is not 'Invalid Date'.
  return value && date !== 'Invalid Date';
}

/**
 * Checks if the given value is a valid image URL.
 * @param {string} value - The value to be checked.
 * @returns {boolean} - True if the value is a valid image URL, false otherwise.
 */
function isValidImageUrl(value) {
  // Check if the value is not empty and starts with 'http'.
  return value && value.startsWith('http');
}

/**
 * Checks if the given value is a valid email.
 * @param {string} value - The value to be checked.
 * @returns {boolean} - True if the value is a valid email, false otherwise.
 */
function isValidEmail(value) {
  // Check if the value is not empty and includes '@'.
  return value && value.includes('@');
}

// Export the functions for use in other modules.
exports.isValidText = isValidText;
exports.isValidDate = isValidDate;
exports.isValidImageUrl = isValidImageUrl;
exports.isValidEmail = isValidEmail;
