export function formatPhoneNumber(phoneStr) {
  if (typeof phoneStr !== 'string') {
    throw new TypeError('Ожидается строка, но передан другой тип данных');
  }

  let digits = '';

  for (const symbol of phoneStr) {
    if (symbol >= '0' && symbol <= '9') {
      digits += symbol;
    }
  }

  if (digits.length !== 10) {
    throw new Error('Номер телефона должен содержать 10 цифр');
  }

  const code = digits.slice(0, 3);
  const firstPart = digits.slice(3, 6);
  const secondPart = digits.slice(6, 8);
  const thirdPart = digits.slice(8, 10);

  return `+7 (${code}) ${firstPart}-${secondPart}-${thirdPart}`;
}
