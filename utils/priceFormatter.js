export function priceFormatter(num) {
  return num.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumSignificantDigits: 10,
  });
}
