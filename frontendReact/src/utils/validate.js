const validate = (value, rules) => {
  let isValid = true;
  const validateLength = (value, rule) => {
    return value.length >= rule;
  };
  const validateEmail = (value) => {};
  const validateRequired = (value) => {
    return value.trim() !== "";
  };

  for (let rule in rules) {
    switch (rule) {
      case "minlenght":
        isValid = isValid && validateLength(value, rules[rule]);
        break;
      case "isEmail":
        isValid = isValid && validateEmail(value);
        break;
      case "isRequired":
        isValid = isValid && validateRequired(value);
        break;
      default:
        isValid = true;
    }
  }
  return { isValid };
};

export default validate;
