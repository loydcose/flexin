const capitalize = (str) => {
  // Check if the input is a string
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }

  // Check if the input string is empty
  if (str.length === 0) {
    throw new Error('Input string must not be empty');
  }

  // Capitalize the first character and concatenate with the rest of the string
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default capitalize