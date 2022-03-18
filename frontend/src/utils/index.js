export const calculatePayment = (principal, interest, year) => {
  const i = interest / 100 / 12;
  const n = year * 12;
  const result = Number(principal * (i + i / (Math.pow(1 + i, n) - 1)));
  return result.toFixed(2);
};

export const removeNonNumeric = (num) => num.toString().replace(/[^0-9]/g, '');

export const decimalNum = (num) => num.toString().replace(/[^0-9.]/g, '');
