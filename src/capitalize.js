const capitalize = (str) => {
  if (typeof str !== "string") {
    throw new Error("Input must be a string")
  }
  if (str.length === 0) {
    throw new Error("Input string must not be empty")
  }

  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default capitalize
