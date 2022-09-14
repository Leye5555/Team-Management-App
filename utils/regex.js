const nameRegex = /^[a-zA-Z ]{2,30}$/;
const schoolRegex = /^[a-zA-Z ]{2,100}$/;
const emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,63}$/;
const numberRegex = /^\d+$/;
const profileRegex = /^[a-zA-Z]{1,8}[a-zA-Z0-9]{1,5}(?!-)$/; // starts with letters, then numbers, no special characters.

module.exports = {
  nameRegex,
  schoolRegex,
  emailRegex,
  numberRegex,
  profileRegex,
};
