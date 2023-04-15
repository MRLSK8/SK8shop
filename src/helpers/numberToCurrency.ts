export const numberToCurrency = (value: number) => {
	if (!value) return 'R$ 0,00';

	return `R$ ${value.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, '$1.')}`;
}
