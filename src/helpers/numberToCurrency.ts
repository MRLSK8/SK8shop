export const numberToCurrency = (value: number) => {
  return `R$ ${value.toFixed(2).replace('.', ',')}`;
}