export const generateId = () =>
  `${Date.now()}_${Math.random().toString(36).slice(2, 5)}`;

export const logoImg = require('@assets/logo.png');

export const validateInput = (
  value: string,
  regex: RegExp,
  requiredMessage: string,
  invalidMessage: string,
) => {
  if (!value.trim()) return requiredMessage;
  if (!regex.test(value)) return invalidMessage;
  return '';
};
